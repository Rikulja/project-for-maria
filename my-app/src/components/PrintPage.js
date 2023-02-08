import { Form, useLoaderData } from "react-router-dom";
import { Document, HeadingLevel, Packer, Paragraph } from "docx";
import FileSaver from "file-saver";
import { useFormula } from "storage";
import styled from "styled-components";

const PrintPage = () => {
  const values = useLoaderData();
  const formula = useFormula();
  return (
    <Form method="post">
      <Print>
        <h4>
          The protocol is now ready and can be found in the directory
          C:/Documents/XXXXX
        </h4>
        <p>Do you want to print the results?</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            downloadDocument(values, formula);
          }}
        >
          Print
        </button>
        <button type="submit" disabled>
          Finish
        </button>
      </Print>
    </Form>
  );
};

const Print = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
  align-items: center;
`;
const downloadDocument = async (values, formula) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "Protocol report",
            heading: HeadingLevel.TITLE,
          }),
          new Paragraph({
            text: "Summary",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph(`Sum of types of ampoules: ${formula.sum}`),
          new Paragraph(
            `Percentage of types of ampoules: ${formula.percentage}`
          ),
          new Paragraph(`Result: ${formula.resultText}`),
          new Paragraph({
            text: "Ampoules",
            heading: HeadingLevel.HEADING_1,
          }),
          // Use the spread operator to insert all returned elements into this array
          ...createAmpouleParagraphs(values),
        ],
      },
    ],
  });

  // Used to export the file into a .docx file
  const blob = await Packer.toBlob(doc);
  // saveAs from FileSaver will download the file
  FileSaver.saveAs(blob, "example.docx");
};

const createAmpouleParagraphs = (values) => {
  // Use flatMap instead of map so that we can return multiple paragraphs for each ampoule and
  // they will be 'flattened' into one flat list.
  return values.ampoules.flatMap((item, index) => {
    return [
      new Paragraph({
        text: `Ampoule ${index + 1}`,
        heading: HeadingLevel.HEADING_2,
      }),
      new Paragraph(`Product name: ${item.pname}`),
      new Paragraph(`Manufacture Date: ${item.mdate}`),
      new Paragraph(`Date of Control: ${item.dcontrol}`),
      new Paragraph(`Operator Name: ${item.operator}`),
      new Paragraph(`Room Nr: ${item.room}`),
      new Paragraph(
        `Type: ${Object.entries(item.types)
          .filter(([key, value]) => {
            return value > 0;
          })
          .map(([key, value]) => {
            return `${key}: ${value}`;
          })
          .join(", ")}`
      ),
    ];
  });
};

export default PrintPage;
