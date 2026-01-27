const BrandingPage = () => {
  const brandingItems = [
    {
      title: 'Баннеры',
      sizes: [
        { size: '1x2 м', price: 'от 600 ₽' },
        { size: '2x3 м', price: 'от 1800 ₽' },
        { size: '3x6 м', price: 'от 5400 ₽' },
        { size: '4x8 м', price: 'от 9600 ₽' }
      ],
      description: 'Широкоформатная печать на баннерной ткани с установкой люверсов'
    },
    {
      title: 'Фотозоны',
      sizes: [
        { size: '2x2 м', price: 'от 3000 ₽' },
        { size: '2.5x2.5 м', price: 'от 4500 ₽' },
        { size: '3x2 м', price: 'от 4800 ₽' },
        { size: '3x3 м', price: 'от 6500 ₽' }
      ],
      description: 'Готовые фотозоны с каркасом и печатным оформлением для ваших мероприятий'
    },
    {
      title: 'Ролл-апы (Roll-up)',
      sizes: [
        { size: '80x200 см', price: 'от 2500 ₽' },
        { size: '100x200 см', price: 'от 2800 ₽' },
        { size: '120x200 см', price: 'от 3200 ₽' },
        { size: '150x200 см', price: 'от 3800 ₽' }
      ],
      description: 'Мобильные рекламные стенды с конструкцией и печатью'
    },
    {
      title: 'Прессволы (Press Wall)',
      sizes: [
        { size: '3x2 м', price: 'от 8000 ₽' },
        { size: '4x2 м', price: 'от 10000 ₽' },
        { size: '4x3 м', price: 'от 15000 ₽' },
        { size: '5x3 м', price: 'от 18000 ₽' }
      ],
      description: 'Брендированные пресс-воллы для фото- и видеосъемки на мероприятиях'
    },
    {
      title: 'X-баннеры (Паук)',
      sizes: [
        { size: '60x160 см', price: 'от 1200 ₽' },
        { size: '80x180 см', price: 'от 1500 ₽' },
        { size: '120x200 см', price: 'от 2000 ₽' }
      ],
      description: 'Компактные выставочные стенды с печатью и каркасом типа "паук"'
    },
    {
      title: 'L-баннеры',
      sizes: [
        { size: '60x160 см', price: 'от 1500 ₽' },
        { size: '80x200 см', price: 'от 2000 ₽' }
      ],
      description: 'Рекламные стойки L-образной формы для внутреннего оформления'
    },
    {
      title: 'Флаги и флагштоки',
      sizes: [
        { size: 'Виндер 2.5 м', price: 'от 3500 ₽' },
        { size: 'Виндер 3.5 м', price: 'от 4500 ₽' },
        { size: 'Капля 3 м', price: 'от 4000 ₽' },
        { size: 'Капля 4 м', price: 'от 5000 ₽' }
      ],
      description: 'Рекламные флаги различных форм для наружного размещения'
    },
    {
      title: 'Стойки регистрации',
      sizes: [
        { size: 'Стандарт 100x100 см', price: 'от 5000 ₽' },
        { size: 'Угловая', price: 'от 6000 ₽' },
        { size: 'С подсветкой', price: 'от 8000 ₽' }
      ],
      description: 'Промо-стойки для регистрации участников мероприятий'
    },
    {
      title: 'Мобильные стенды',
      sizes: [
        { size: '2x2 м', price: 'от 12000 ₽' },
        { size: '3x2 м', price: 'от 15000 ₽' },
        { size: '3x3 м', price: 'от 18000 ₽' }
      ],
      description: 'Pop-up стенды и выставочные системы быстрой сборки'
    },
    {
      title: 'Тантамарески',
      sizes: [
        { size: '1x2 м', price: 'от 4000 ₽' },
        { size: '1.5x2 м', price: 'от 5500 ₽' },
        { size: '2x2 м', price: 'от 7000 ₽' }
      ],
      description: 'Фигурные стенды для фотографирования с вырезами для лиц'
    },
    {
      title: 'Брендированные арки',
      sizes: [
        { size: '2x2 м', price: 'от 8000 ₽' },
        { size: '3x3 м', price: 'от 12000 ₽' }
      ],
      description: 'Надувные и каркасные арки для входных зон мероприятий'
    },
    {
      title: 'Таблички и указатели',
      sizes: [
        { size: 'A4', price: 'от 300 ₽' },
        { size: 'A3', price: 'от 500 ₽' },
        { size: 'A2', price: 'от 800 ₽' },
        { size: 'A1', price: 'от 1200 ₽' }
      ],
      description: 'Навигационные таблички и информационные указатели'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-4">Брендирование мероприятий</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl">
        Полный комплекс услуг по брендированию корпоративных и развлекательных мероприятий
        в Калининграде. Создаем фирменную атмосферу вашего события.
      </p>

      {/* Описание услуги */}
      <div className="bg-gray-100 p-8 mb-8 max-w-4xl">
        <h2 className="text-2xl mb-4">Что мы предлагаем</h2>
        <p className="text-gray-700 mb-4">
          Мы специализируемся на комплексном оформлении мероприятий любого масштаба:
          от корпоративов и выставок до фестивалей и спортивных событий.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Разработка концепции брендирования</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Производство всех элементов оформления</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Доставка и монтаж на объекте</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Демонтаж после мероприятия</p>
          </li>
        </ul>
      </div>

      {/* Каталог элементов */}
      <h2 className="text-3xl mb-6">Стандартные размеры и цены</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandingItems.map((item, index) => (
          <div key={index} className="border border-gray-300 p-6 hover:border-black transition-colors">
            <h3 className="text-xl mb-2 font-medium">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>

            <div className="space-y-2 mb-4">
              {item.sizes.map((sizeItem, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{sizeItem.size}</span>
                  <span className="font-medium">{sizeItem.price}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="text-xs text-gray-600">
                *Цена указана за изготовление с печатью
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Дополнительные услуги */}
      <div className="mt-12 max-w-4xl">
        <h2 className="text-3xl mb-6">Дополнительные услуги</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Разработка дизайна</h3>
            <p className="text-gray-700 mb-2">
              Создание уникального дизайна для всех элементов брендирования
            </p>
            <p className="font-medium">от 3000 ₽</p>
          </div>

          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Монтаж и демонтаж</h3>
            <p className="text-gray-700 mb-2">
              Профессиональная установка всех конструкций на месте проведения
            </p>
            <p className="font-medium">от 2000 ₽</p>
          </div>

          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Доставка по Калининграду</h3>
            <p className="text-gray-700 mb-2">
              Транспортировка всех элементов на место проведения мероприятия
            </p>
            <p className="font-medium">от 1000 ₽</p>
          </div>

          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Аренда конструкций</h3>
            <p className="text-gray-700 mb-2">
              Возможность аренды стандартных конструкций без печати
            </p>
            <p className="font-medium">от 500 ₽/день</p>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="mt-12 bg-black text-white p-8">
        <h2 className="text-2xl mb-4">Планируете мероприятие?</h2>
        <p className="mb-4">
          Свяжитесь с нами для расчета стоимости комплексного брендирования вашего события
        </p>
        <div className="space-y-2">
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: events@shop.ru</p>
          <p>г. Калининград, ул. Примерная, д. 1</p>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;
