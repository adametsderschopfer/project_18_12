const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8">О нас</h1>

      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="text-2xl mb-4">Наша история</h2>
          <p className="text-gray-700 leading-relaxed">
            Мы начали свою деятельность в 2010 году с целью предоставить покупателям
            качественные товары по доступным ценам. За годы работы мы расширили
            ассортимент и наладили партнерские отношения с ведущими производителями.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4">Наши преимущества</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p className="text-gray-700">
                Широкий ассортимент товаров в различных категориях
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p className="text-gray-700">
                Гарантия качества на все представленные товары
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p className="text-gray-700">
                Быстрая доставка по всей России
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p className="text-gray-700">
                Профессиональная служба поддержки клиентов
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p className="text-gray-700">
                Удобные способы оплаты
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4">Наша миссия</h2>
          <p className="text-gray-700 leading-relaxed">
            Мы стремимся сделать онлайн-шопинг простым, удобным и приятным для каждого
            покупателя. Наша цель — предоставить качественный сервис и помочь вам найти
            именно то, что вам нужно.
          </p>
        </section>

        <section className="bg-gray-100 p-8">
          <h2 className="text-2xl mb-4">Контакты</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
            <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
            <p><strong>Email:</strong> info@shop.ru</p>
            <p><strong>Режим работы:</strong> Пн-Пт 9:00 - 18:00</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage
