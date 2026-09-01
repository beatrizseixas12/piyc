import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    number: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: false,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
  },
  { timestamps: true },
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
