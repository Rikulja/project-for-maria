import { Form } from "react-router-dom";
import { saveAs, Document, Packer, Paragraph, TextRun } from "docx";

const PrintPage = () => {
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
  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    saveAs(blob, "example.docx");
  });
  return (
    <Form method="post">
      <div>
        <h4>
          The protocol is now ready and can be found in the directory
          C:/Documents/XXXXX
        </h4>
        <p>Do you want to print the results?</p>
        <button>Print</button>
        <button type="submit">Finish</button>
      </div>
    </Form>
  );
};

export default PrintPage;
