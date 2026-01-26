import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О нас */}
          <div>
            <h3 className="text-lg mb-4 font-medium">О нас</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Мы специализируемся на производстве сувениров, мерча и корпоративных подарков
              в Калининграде. Предлагаем полный цикл брендирования мероприятий, полиграфические
              услуги и различные виды нанесений.
            </p>
          </div>

          {/* Каталог и услуги */}
          <div>
            <h3 className="text-lg mb-4 font-medium">Каталог и услуги</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/branding" className="hover:text-white transition-colors">
                  Брендирование мероприятий
                </Link>
              </li>
              <li>
                <Link href="/printing" className="hover:text-white transition-colors">
                  Полиграфия / Типография
                </Link>
              </li>
              <li>
                <Link href="/printing-types" className="hover:text-white transition-colors">
                  Виды нанесений
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg mb-4 font-medium">Информация</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">
                  Контакты / Реквизиты
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-white transition-colors">
                  Каталог товаров
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg mb-4 font-medium">Контакты</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>г. Калининград</p>
              <p>Email: info@shop.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
              <p>Пн-Пт 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2026 Сувениры и Мерч. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
