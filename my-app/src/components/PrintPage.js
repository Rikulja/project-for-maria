import { Form } from "react-router-dom";
import { Document, Packer, Paragraph, TextRun } from "docx";
import FileSaver from "file-saver";

const PrintPage = () => {
  return (
    <Form method="post">
      <div>
        <h4>
          The protocol is now ready and can be found in the directory
          C:/Documents/XXXXX
        </h4>
        <p>Do you want to print the results?</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            downloadDocument();
          }}
        >
          Print
        </button>
        <button type="submit">Finish</button>
      </div>
    </Form>
  );
};

const downloadDocument = async () => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun("Hello World"),
              new TextRun({
                text: "Foo Bar",
                bold: true,
              }),
              new TextRun({
                text: "\tGithub is the best",
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  // Used to export the file into a .docx file
  const blob = await Packer.toBlob(doc);
  // saveAs from FileSaver will download the file
  FileSaver.saveAs(blob, "example.docx");
};

export default PrintPage;
