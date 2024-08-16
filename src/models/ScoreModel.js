export class ScoreModel {
    constructor(likes, comments, shares, qualityScore) {
      this.likes = likes;
      this.comments = comments;
      this.shares = shares;
      this.qualityScore = qualityScore; // Gazetecilik kalitesi puanı
    }
  
    calculateTotalScore() {
      return (
        this.likes * 2 + 
        this.comments * 3 + 
        this.shares * 5 + 
        this.qualityScore * 10
      );
    }
  }
  