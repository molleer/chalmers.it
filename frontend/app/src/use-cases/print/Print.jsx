import React, { useState } from "react";
import {
  DigitDesign,
  DigitButton,
  DigitSelectFile,
  DigitText,
  DigitAutocompleteSelectSingle,
  DigitLayout,
  DigitTextField,
} from "@cthit/react-digit-components";
import Axios from "axios";
import { useEffect } from "react";

export const Print = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [printer, setPrinter] = useState({
    name: "ed-2338-laser2",
    location: "EDIT E-Studion",
    media: "A4",
    weight: 2796,
    duplex: true,
  });
  const [printers, setPrinters] = useState([
    {
      text: "ed-2338-laser2",
      value: {
        name: "ed-2338-laser2",
        location: "EDIT E-Studion",
        media: "A4",
        weight: 2796,
        duplex: true,
      },
    },
  ]);

  useEffect(() => {
    Axios.get("https://print.chalmers.it/list.json")
      .then((res) =>
        setPrinters(
          res.data.map((p) => {
            return { text: p.name, value: p };
          })
        )
      )
      .catch((err) => {
        console.log("Failed to fetch printers");
        console.log(err);
      });
  }, []);

  return (
    <>
      <DigitDesign.Card size={{ width: "100%" }}>
        <DigitDesign.CardHeader>
          <DigitDesign.CardTitle text="Print" />
        </DigitDesign.CardHeader>
        <DigitDesign.CardBody>
          <DigitText.Text text="File" />
          <DigitSelectFile
            buttonProps={{ raised: true, primary: true }}
            selectedFileName={file != null ? file.name : null}
            onSelectFile={(f) => setFile(f)}
          />

          <DigitLayout.UniformGrid margin="30px" minItemWidth="0px">
            <div>
              <DigitText.Text text="Skrivate" />
              <DigitAutocompleteSelectSingle
                options={printers}
                value={printer}
                onChange={(e) => setPrinter(e.target.value)}
              />
            </div>
            {printer !== null && (
              <>
                <DigitText.Text text={`Plats: ${printer.location}`} />
                <DigitText.Text text={`Media: ${printer.media}`} />
              </>
            )}
          </DigitLayout.UniformGrid>

          <DigitLayout.UniformGrid margin="30px" minItemWidth="0px">
            <DigitTextField
              value={username}
              upperLabel="Användarnamn"
              onChange={(e) => setUsername(e.target.value)}
            />
            <DigitTextField
              value={password}
              password
              upperLabel="Lösenord"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DigitLayout.UniformGrid>

          <DigitButton
            disabled={file === null}
            primary
            raised
            text="Print"
            onClick={() => {
              var data = new FormData();
              data.append("utf8", "\u2713");
              data.append("print[file]", file);
              data.append("print[printer]", printer.name);
              data.append("print[duplex]", 0);
              data.append("print[duplex]", 1);
              data.append("print[collate]", 0);
              data.append("print[collate]", 1);
              data.append("print[grayscale]", 1);
              data.append("print[copies]", 1);
              data.append("print[range]", "");
              data.append("print[media]", "A4");
              data.append("print[ppi]", "auto");
              data.append("print[username]", username);
              data.append("print[password]", password);
              Axios.post("https://print.chalmers.it/print", data)
                .then((res) => console.log("Success"))
                .catch((err) => console.log("Failed"));
            }}
          />
        </DigitDesign.CardBody>
      </DigitDesign.Card>
    </>
  );
};
