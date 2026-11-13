export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  description: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'food', name: 'Корм', icon: '🍖', count: 156 },
  { id: 'toys', name: 'Игрушки', icon: '🎾', count: 89 },
  { id: 'accessories', name: 'Аксессуары', icon: '🦴', count: 234 },
  { id: 'hygiene', name: 'Гигиена', icon: '🧴', count: 67 },
  { id: 'clothes', name: 'Одежда', icon: '👕', count: 45 },
  { id: 'houses', name: 'Домики и будки', icon: '🏠', count: 23 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Премиум корм для собак, 10 кг',
    price: 3490,
    oldPrice: 4290,
    image: '🐕',
    category: 'food',
    description: 'Сбалансированный корм для взрослых собак всех пород с курицей и овощами.',
    badge: 'Хит',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Интерактивная игрушка-мяч',
    price: 890,
    image: '🎾',
    category: 'toys',
    description: 'Устойчивая к укусам игрушка с рандомным движением. Занимает питомца на часы!',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Ошейник кожаный, размер M',
    price: 1990,
    oldPrice: 2490,
    image: '🧷',
    category: 'accessories',
    description: 'Натуральная кожа, металлическая фурнитура. Регулируемый размер.',
    badge: '-20%',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Шампунь для кошек, 250 мл',
    price: 590,
    image: '🐈',
    category: 'hygiene',
    description: 'Мягкий шампунь с экстрактом алоэ. Подходит для регулярного использования.',
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 5,
    name: 'Зимняя куртка для собак',
    price: 2790,
    image: '🧥',
    category: 'clothes',
    description: 'Тёплая куртка с рефлективными элементами. Водоотталкивающая ткань.',
    badge: 'Новинка',
    rating: 4.7,
    reviews: 45,
  },
  {
    id: 6,
    name: 'Домик-комплекс для кошек',
    price: 8990,
    oldPrice: 11990,
    image: '🏠',
    category: 'houses',
    description: 'Многоуровневый домик с когтеточкой, лежанкой и тоннелем.',
    badge: '-25%',
    rating: 4.9,
    reviews: 112,
  },
  {
    id: 7,
    name: 'Корм для котят, 5 кг',
    price: 1890,
    image: '🐱',
    category: 'food',
    description: 'Специализированный корм для котят до 12 месяцев с молоком и таурином.',
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 8,
    name: 'Косточка из бычьей трахеи',
    price: 390,
    image: '🦴',
    category: 'toys',
    description: 'Натуральная лакомая косточка. Помогает чистить зубы и удовлетворяет жевательный инстинкт.',
    rating: 4.4,
    reviews: 312,
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  { icon: '🚚', title: 'Быстрая доставка', description: 'Доставим за 1-2 дня по всему России' },
  { icon: '💰', title: 'Лучшие цены', description: 'Гарантия низкой цены и постоянные скидки' },
  { icon: '⭐', title: 'Качество', description: 'Только проверенные бренды и товары' },
  { icon: '🩺', title: 'Консультация ветеринара', description: 'Бесплатная онлайн-консультация при покупке' },
];

export const testimonials = [
  {
    name: 'Анна Петрова',
    text: 'Отличный магазин! Корм всегда свежий, доставка быстрая. Моя собака в восторге от корма премиум!',
    avatar: '👩',
    rating: 5,
  },
  {
    name: 'Иван Сидоров',
    text: 'Заказываю игрушки для своего лабрадора. Качество на высоте, игрушки прочные и интересные.',
    avatar: '👨',
    rating: 5,
  },
  {
    name: 'Мария Козлова',
    text: 'Потрясающий выбор товаров для кошек. Ветеринар помог подобрать корм — котик стал здоровее!',
    avatar: '👩‍🦰',
    rating: 5,
  },
];
