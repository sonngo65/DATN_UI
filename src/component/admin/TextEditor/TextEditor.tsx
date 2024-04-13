import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { CKFinder } from "@ckeditor/ckeditor5-ckfinder";
// import { CKBox } from "@ckeditor/ckeditor5-ckbox";
export default function () {
  const config = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "imageUpload",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
        "alignment",
        "code",
        "codeBlock",
        "findAndReplace",
        "fontColor",
        "fontFamily",
        "fontSize",
        "fontBackgroundColor",
        "highlight",
        "horizontalLine",
        "htmlEmbed",
        "imageInsert",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "margeTableCells"],
    },
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
            uploadUrl: "http://localhost:8080/api/v1/files/connect-ckeditor",
            options: {},
          },
        }}
        data={"<h1>CheckEditor </h1>"}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </>
  );
}
