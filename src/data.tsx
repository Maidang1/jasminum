export const items = [
  // Photo by ivan Torres on Unsplash
  {
    id: 'c',
    category: 'Pizza',
    title: '5 Food Apps Delivering the Best of Your City',
    pointOfInterest: 80,
    backgroundColor: '#814A0E',
  },
] as const;

export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };

export interface Jasmine {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  careInstructions: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

export const jasmines: Jasmine[] = [
  {
    id: 'common-jasmine',
    name: '普通茉莉',
    shortDescription: '清新淡雅，花香四溢',
    fullDescription:
      '普通茉莉（Jasminum officinale）是最广为人知的茉莉品种。它有着浓郁的香气，白色的花朵，是许多香水和茶叶的重要原料。这种茉莉适应性强，易于栽培，是园艺爱好者的首选。',
    careInstructions:
      '喜温暖湿润环境，需要充足的光照。春季到秋季每周浇水2-3次，冬季减少浇水。定期修剪以保持形状，春季施肥促进生长。',
    imageUrl:
      'https://cn.bing.com/th?id=OHR.ArraialdoCabo_ZH-CN6202620711_UHD.jpg',
    rating: 4.8,
    reviews: 1200,
  },
  {
    id: 'arabian-jasmine',
    name: '阿拉伯茉莉',
    shortDescription: '花大香浓，茉莉之王',
    fullDescription:
      '阿拉伯茉莉（Jasminum sambac）又称茉莉花王，花朵较大，香气浓郁持久。它是制作茉莉花茶的主要原料之一，也常被用于制作精油和香水。这种茉莉在温暖的气候下可以全年开花。',
    careInstructions:
      '喜高温高湿环境，耐寒性较差。需要充足光照，但夏季需要适当遮阴。土壤要求排水良好，定期施加有机肥料。冬季需要特别的保护措施。',
    imageUrl:
      'https://cn.bing.com/th?id=OHR.ArraialdoCabo_ZH-CN6202620711_UHD.jpg',
    rating: 4.9,
    reviews: 980,
  },
  {
    id: 'star-jasmine',
    name: '星形茉莉',
    shortDescription: '星光璀璨，芳香四溢',
    fullDescription:
      '星形茉莉（Trachelospermum jasminoides）虽然不属于真正的茉莉属，但因其相似的香气和外形而得名。它的花朵呈现独特的星形，常被用作地被植物或攀援植物。它的香气清新，略带甜味。',
    careInstructions:
      '适应性强，可以在全日照到部分遮阴的环境中生长。耐寒性较好，但在寒冷地区冬季需要保护。定期修剪以控制生长，保持理想的形状。土壤需要排水良好，稍微酸性。',
    imageUrl:
      'https://cn.bing.com/th?id=OHR.ArraialdoCabo_ZH-CN6202620711_UHD.jpg',
    rating: 4.7,
    reviews: 850,
  },
  {
    id: 'night-blooming-jasmine',
    name: '夜来香',
    shortDescription: '夜幕下的芳香使者',
    fullDescription:
      '夜来香（Cestrum nocturnum）虽然不是真正的茉莉，但因其夜间盛开并散发浓郁香气而得名。它的花朵较小，呈绿白色，在夜晚绽放，散发出甜美的香气。这种植物非常适合种植在卧室窗外或庭院中，让您在夜晚也能享受到怡人的花香。',
    careInstructions:
      '喜欢温暖湿润的环境，需要充足的阳光。土壤要求疏松肥沃、排水良好。定期修剪以控制其生长，保持理想的形状。夏季需要经常浇水，冬季则应该减少浇水频率。在寒冷地区，冬季需要将其移至室内或提供保护。',
    imageUrl:
      'https://cn.bing.com/th?id=OHR.ArraialdoCabo_ZH-CN6202620711_UHD.jpg',
    rating: 4.6,
    reviews: 720,
  },
];
