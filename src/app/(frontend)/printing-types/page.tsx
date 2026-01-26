 const PrintingTypesPage = () => {
  const printingTypes = [
    {
      title: 'Шелкография',
      description: 'Трафаретная печать - один из самых популярных и долговечных способов нанесения.',
      advantages: [
        'Высокая стойкость к истиранию',
        'Яркие насыщенные цвета',
        'Подходит для больших тиражей',
        'Экономична при больших объемах'
      ],
      materials: ['Текстиль', 'Пластик', 'Металл', 'Стекло', 'Керамика'],
      minQuantity: 'от 50 шт',
      price: 'от 50 ₽/шт'
    },
    {
      title: 'Тампопечать',
      description: 'Технология переноса изображения с помощью силиконового тампона.',
      advantages: [
        'Печать на неровных поверхностях',
        'Высокая точность изображения',
        'Многоцветная печать',
        'Подходит для мелких деталей'
      ],
      materials: ['Пластик', 'Металл', 'Стекло', 'Керамика', 'Дерево', 'Кожа'],
      minQuantity: 'от 50 шт',
      price: 'от 30 ₽/шт'
    },
    {
      title: 'Термотрансфер',
      description: 'Нанесение изображения с помощью специальной пленки и термопресса.',
      advantages: [
        'Яркие цвета',
        'Фотографическое качество',
        'Быстрое изготовление',
        'Подходит для малых тиражей'
      ],
      materials: ['Текстиль (хлопок, полиэстер)', 'Нетканые материалы'],
      minQuantity: 'от 1 шт',
      price: 'от 100 ₽/шт'
    },
    {
      title: 'Сублимация',
      description: 'Печать специальными чернилами с последующим нагревом для впитывания в материал.',
      advantages: [
        'Не ощущается на ощупь',
        'Не выгорает и не стирается',
        'Полноцветная печать',
        'Фотографическое качество'
      ],
      materials: ['Полиэстер', 'Керамика с покрытием', 'Металл с покрытием'],
      minQuantity: 'от 1 шт',
      price: 'от 150 ₽/шт'
    },
    {
      title: 'Вышивка',
      description: 'Создание изображения нитками с помощью вышивальной машины.',
      advantages: [
        'Премиальный внешний вид',
        'Высокая долговечность',
        'Объемное изображение',
        'Не выгорает'
      ],
      materials: ['Текстиль любого типа', 'Кожа', 'Кепки', 'Сумки'],
      minQuantity: 'от 10 шт',
      price: 'от 200 ₽/шт'
    },
    {
      title: 'УФ-печать (UV)',
      description: 'Прямая печать на изделии с мгновенным высыханием под ультрафиолетом.',
      advantages: [
        'Печать на любых материалах',
        'Высокое качество',
        'Стойкость к выцветанию',
        'Экологичность'
      ],
      materials: ['Пластик', 'Металл', 'Стекло', 'Дерево', 'Кожа', 'Акрил'],
      minQuantity: 'от 1 шт',
      price: 'от 200 ₽/шт'
    },
    {
      title: 'Гравировка',
      description: 'Механическое удаление верхнего слоя материала для создания изображения.',
      advantages: [
        'Долговечность изображения',
        'Премиальный вид',
        'Точность деталей',
        'Не стирается'
      ],
      materials: ['Металл', 'Стекло', 'Дерево', 'Пластик', 'Кожа'],
      minQuantity: 'от 1 шт',
      price: 'от 100 ₽/шт'
    },
    {
      title: 'Лазерная гравировка',
      description: 'Нанесение изображения лазерным лучом с высокой точностью.',
      advantages: [
        'Максимальная точность',
        'Быстрое изготовление',
        'Любая сложность изображения',
        'Вечное изображение'
      ],
      materials: ['Металл', 'Дерево', 'Кожа', 'Стекло', 'Пластик', 'Камень'],
      minQuantity: 'от 1 шт',
      price: 'от 150 ₽/шт'
    },
    {
      title: 'Тиснение',
      description: 'Создание рельефного изображения методом давления.',
      advantages: [
        'Элегантный внешний вид',
        'Тактильный эффект',
        'Долговечность',
        'Премиальность'
      ],
      materials: ['Кожа', 'Кожзам', 'Картон', 'Бумага'],
      minQuantity: 'от 50 шт',
      price: 'от 80 ₽/шт'
    },
    {
      title: 'Деколь',
      description: 'Нанесение керамических красок с последующим обжигом.',
      advantages: [
        'Подходит для пищевой посуды',
        'Не стирается',
        'Безопасность',
        'Долговечность'
      ],
      materials: ['Керамика', 'Фарфор', 'Стекло'],
      minQuantity: 'от 100 шт',
      price: 'от 120 ₽/шт'
    },
    {
      title: 'Цифровая печать',
      description: 'Прямая печать из компьютера без создания форм.',
      advantages: [
        'Малые тиражи',
        'Быстрое изготовление',
        'Полноцветная печать',
        'Персонализация каждого изделия'
      ],
      materials: ['Текстиль', 'Бумага', 'Картон', 'Пленка'],
      minQuantity: 'от 1 шт',
      price: 'от 250 ₽/шт'
    },
    {
      title: 'Флекс и флок',
      description: 'Нанесение пленки или ворсового материала с помощью термопресса.',
      advantages: [
        'Яркие цвета (флекс)',
        'Бархатистая поверхность (флок)',
        'Долговечность',
        'Подходит для малых тиражей'
      ],
      materials: ['Текстиль любого типа'],
      minQuantity: 'от 1 шт',
      price: 'от 120 ₽/шт'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-4">Виды нанесений</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl">
        Мы предлагаем все современные технологии нанесения логотипов и изображений
        на сувенирную продукцию, мерч и корпоративные подарки.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {printingTypes.map((type, index) => (
          <div key={index} className="border border-gray-300 p-6 hover:border-black transition-colors">
            <h3 className="text-2xl mb-2 font-medium">{type.title}</h3>
            <p className="text-gray-700 mb-4">{type.description}</p>

            <div className="space-y-4">
              {/* Преимущества */}
              <div>
                <h4 className="font-medium mb-2">Преимущества:</h4>
                <ul className="space-y-1">
                  {type.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Материалы */}
              <div>
                <h4 className="font-medium mb-2">Подходящие материалы:</h4>
                <div className="flex flex-wrap gap-2">
                  {type.materials.map((material, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Цены */}
              <div className="pt-4 border-t border-gray-300 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Минимальный тираж:</p>
                  <p className="font-medium">{type.minQuantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Стоимость:</p>
                  <p className="font-medium">{type.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Помощь в выборе */}
      <div className="mt-12 bg-gray-100 p-8 max-w-4xl">
        <h2 className="text-2xl mb-4">Нужна помощь в выборе метода нанесения?</h2>
        <p className="text-gray-700 mb-4">
          Наши специалисты помогут подобрать оптимальный способ нанесения в зависимости от:
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Типа материала изделия</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Тиража продукции</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Сложности изображения</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Бюджета проекта</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-black rounded-full mt-2" />
            <p>Сроков изготовления</p>
          </li>
        </ul>
        <div className="bg-black text-white p-6">
          <p className="mb-2">Свяжитесь с нами для консультации:</p>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: print@shop.ru</p>
        </div>
      </div>
    </div>
  );
};

export default PrintingTypesPage
