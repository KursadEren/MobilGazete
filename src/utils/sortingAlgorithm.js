// utils/sortingAlgorithm.js

import { ScoreModel } from '../models/ScoreModel'

export const sortArticlesByScore = (articles) => {
  return articles.sort((a, b) => {
    const scoreA = new ScoreModel(a.likes, a.comments, a.shares, a.qualityScore).calculateTotalScore();
    const scoreB = new ScoreModel(b.likes, b.comments, b.shares, b.qualityScore).calculateTotalScore();
    
    return scoreB - scoreA; // Yüksek puanlı içeriklerin öne çıkması için
  });
};
