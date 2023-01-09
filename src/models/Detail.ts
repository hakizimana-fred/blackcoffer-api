import mongoose, { Schema, Document } from "mongoose";

interface IDetail extends Document {
  end_year?: string;
  intensity?: number;
  sector?: string;
  topic?: string;
  insight?: string;
  url?: string;
  region?: string;
  start_year?: string;
  impact?: string;
  added?: string;
  published?: string;
  country?: string;
  relevance?: number;
  pestle?: string;
  source?: string;
  title?: string;
  likelihood?: number;
}

const detailSchema = new Schema(
  {
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
  },
  { timestamps: true }
);

export default mongoose.model<IDetail>("Detail", detailSchema);
