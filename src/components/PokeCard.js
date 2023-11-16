import * as React from "react";
import PokeTabs from "./PokeTabs";
import Typography from "@mui/joy/Typography";

export default function PokeCard(props) {
  const imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: "890px", minWidth: "790px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            {/* ... */}

            <img
              src={imgsrc}
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: 255, width: 260 }}
            />

            {/* ... */}
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{ maxWidth: "100%", overflow: "hidden" }}
            >
              {/* ... */}

              <Typography
                color="neutral"
                level="h2"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
              >
                {props.name}
              </Typography>

              <Typography color="danger" level="title-lg" variant="soft">
                Height : {props.height}
              </Typography>

              <Typography color="danger" level="title-lg" variant="soft">
                Weight : {props.weight}
              </Typography>

              <Typography color="danger" level="title-lg" variant="soft">
                Order : {props.order}
              </Typography>

              <div style={{ marginTop: "10px" }}>
                <PokeTabs
                  head1="Abilities"
                  head2="Moves"
                  ability_list={props.abilities}
                  moves_list={props.moves}
                />
              </div>

              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
