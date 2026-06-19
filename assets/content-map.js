const contentSections = [
  { id: 'sports-home', title: '体育首页', tags: ['足球', '篮球', '网球'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'football', title: '足球世界', tags: ['英超', '西甲', '欧冠'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'basketball', title: '篮球风云', tags: ['NBA', 'CBA', '街球'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'tennis', title: '网球天地', tags: ['大满贯', 'ATP', 'WTA'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'esports', title: '电子竞技', tags: ['LOL', 'DOTA2', 'CS:GO'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'news', title: '新闻速递', tags: ['转会', '赛况', '专访'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'highlights', title: '精彩集锦', tags: ['进球', '扣篮', '绝杀'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'training', title: '训练营', tags: ['技巧', '体能', '战术'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'history', title: '经典回顾', tags: ['传奇', '纪录', '回忆'], keyword: '新球体育', url: 'https://main-newball.com' },
  { id: 'community', title: '球迷社区', tags: ['讨论', '投票', '活动'], keyword: '新球体育', url: 'https://main-newball.com' }
];

const tagCategory = {
  league: ['英超', '西甲', '欧冠', 'NBA', 'CBA', 'LOL', 'DOTA2', 'CS:GO'],
  event: ['大满贯', '转会', '赛况', '进球', '扣篮', '绝杀'],
  role: ['传奇', '专访', '技巧', '战术', '体能', '纪录'],
  interactive: ['讨论', '投票', '活动', '回忆']
};

function searchSections(query) {
  if (!query || typeof query !== 'string') return [];
  const lowerQuery = query.toLowerCase().trim().replace(/\s+/g, '');
  if (lowerQuery.length === 0) return [];

  return contentSections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const keywordMatch = section.keyword.toLowerCase().includes(lowerQuery);
    const idMatch = section.id.toLowerCase().includes(lowerQuery);
    return titleMatch || tagMatch || keywordMatch || idMatch;
  });
}

function filterByTagCategory(categoryName) {
  const tags = tagCategory[categoryName];
  if (!tags || !Array.isArray(tags)) return [];
  return contentSections.filter(section =>
    section.tags.some(tag => tags.includes(tag))
  );
}

function getAllUniqueTags() {
  const tagSet = new Set();
  contentSections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

function getSectionById(id) {
  return contentSections.find(section => section.id === id) || null;
}

function getRandomSection() {
  const index = Math.floor(Math.random() * contentSections.length);
  return contentSections[index];
}

function countSectionsByKeyword(keyword) {
  return contentSections.filter(section => section.keyword === keyword).length;
}

const contentMap = {
  sections: contentSections,
  tagCategory: tagCategory,
  search: searchSections,
  filterByCategory: filterByTagCategory,
  allTags: getAllUniqueTags,
  findById: getSectionById,
  random: getRandomSection,
  countByKeyword: countSectionsByKeyword,
  meta: {
    version: '1.0.0',
    defaultKeyword: '新球体育',
    homepage: 'https://main-newball.com',
    lastUpdated: new Date('2025-03-15')
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = contentMap;
}