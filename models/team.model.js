import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
    name: {
      type: String,
      unique: true,
      required: true,
    },
    country: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    group: {
      type: String,
      required: false,
      default: null,
    },
    // A que torneio pertence a equipa — por omissão "youth-cup" para não
    // afetar equipas já existentes (todas criadas antes deste campo existir).
    league: {
      type: String,
      enum: ["youth-cup", "corporate-league"],
      default: "youth-cup",
    },
  },
  { timestamps: true },
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
