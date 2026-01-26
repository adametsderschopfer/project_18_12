const ContactsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8">Контакты / Реквизиты</h1>

      <div className="max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Контактная информация */}
        <div className="space-y-6">
          <section className="border border-gray-300 p-6">
            <h2 className="text-2xl mb-4">Контактная информация</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-medium text-black">Адрес:</p>
                <p>г. Калининград, ул. Примерная, д. 1</p>
              </div>
              <div>
                <p className="font-medium text-black">Телефон:</p>
                <p>+7 (999) 123-45-67</p>
                <p>+7 (999) 987-65-43</p>
              </div>
              <div>
                <p className="font-medium text-black">Email:</p>
                <p>info@shop.ru</p>
                <p>sales@shop.ru</p>
              </div>
              <div>
                <p className="font-medium text-black">Режим работы:</p>
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота - Воскресенье: выходной</p>
              </div>
            </div>
          </section>

          <section className="border border-gray-300 p-6">
            <h2 className="text-2xl mb-4">Социальные сети</h2>
            <div className="space-y-2 text-gray-700">
              <p>Instagram: @shop_kaliningrad</p>
              <p>VK: vk.com/shop_kaliningrad</p>
              <p>Telegram: @shop_kaliningrad</p>
            </div>
          </section>
        </div>

        {/* Реквизиты */}
        <div className="space-y-6">
          <section className="border border-gray-300 p-6">
            <h2 className="text-2xl mb-4">Юридическая информация</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <p className="font-medium text-black">Полное наименование:</p>
                <p>ООО "Сувениры и Мерч"</p>
              </div>
              <div>
                <p className="font-medium text-black">ИНН:</p>
                <p>3906123456</p>
              </div>
              <div>
                <p className="font-medium text-black">КПП:</p>
                <p>390601001</p>
              </div>
              <div>
                <p className="font-medium text-black">ОГРН:</p>
                <p>1153926012345</p>
              </div>
              <div>
                <p className="font-medium text-black">Юридический адрес:</p>
                <p>236000, г. Калининград, ул. Примерная, д. 1, офис 10</p>
              </div>
            </div>
          </section>

          <section className="border border-gray-300 p-6">
            <h2 className="text-2xl mb-4">Банковские реквизиты</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <p className="font-medium text-black">Расчетный счет:</p>
                <p>40702810100000123456</p>
              </div>
              <div>
                <p className="font-medium text-black">Банк:</p>
                <p>ПАО "Сбербанк"</p>
              </div>
              <div>
                <p className="font-medium text-black">БИК:</p>
                <p>042748634</p>
              </div>
              <div>
                <p className="font-medium text-black">Корр. счет:</p>
                <p>30101810100000000634</p>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
};

export default ContactsPage
