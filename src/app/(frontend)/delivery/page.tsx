 const DeliveryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8">Доставка и оплата</h1>

      <div className="max-w-4xl space-y-8">
        {/* Важная информация */}
        <div className="bg-black text-white p-6 border-4 border-black">
          <h2 className="text-2xl mb-3">Важно!</h2>
          <p className="text-lg">
            Мы осуществляем доставку только по г. Калининград и Калининградской области.
          </p>
        </div>

        {/* Доставка */}
        <section>
          <h2 className="text-3xl mb-6">Доставка</h2>

          <div className="space-y-6">
            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Доставка по Калининграду</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Бесплатная доставка при заказе от 3000 рублей</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Стоимость доставки при заказе менее 3000 рублей - 300 рублей</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Срок доставки: 1-2 рабочих дня</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Доставка осуществляется с 10:00 до 18:00 в рабочие дни</p>
                </li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Доставка по Калининградской области</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Стоимость доставки рассчитывается индивидуально</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Срок доставки: 2-5 рабочих дней</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Минимальная сумма заказа для доставки по области - 5000 рублей</p>
                </li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Самовывоз</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Бесплатно</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Адрес: г. Калининград, ул. Примерная, д. 1</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Режим работы: Пн-Пт 9:00 - 18:00</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Заказ будет готов к выдаче в течение 24 часов после оформления</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Оплата */}
        <section>
          <h2 className="text-3xl mb-6">Способы оплаты</h2>

          <div className="space-y-6">
            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Наличными</h3>
              <p className="text-gray-700">
                Оплата наличными курьеру при получении заказа или в пункте самовывоза
              </p>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Банковской картой</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Оплата картой при получении (курьеру или в пункте выдачи)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p>Онлайн-оплата на сайте (Visa, MasterCard, МИР)</p>
                </li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Безналичный расчет для юридических лиц</h3>
              <p className="text-gray-700">
                Оплата по счету с НДС и без НДС. После оформления заказа мы выставим счет
                на оплату. Отгрузка товара производится после поступления денежных средств
                на расчетный счет.
              </p>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-xl mb-3 font-medium">Системы быстрых платежей (СБП)</h3>
              <p className="text-gray-700">
                Оплата через Систему быстрых платежей по QR-коду
              </p>
            </div>
          </div>
        </section>

        {/* Дополнительная информация */}
        <section className="bg-gray-100 p-6">
          <h2 className="text-2xl mb-4">Дополнительная информация</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p>
                При получении заказа обязательно проверьте комплектность и целостность товара
                в присутствии курьера
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p>
                Если товар не подошел, вы можете вернуть его в течение 14 дней с момента покупки
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <p>
                Для корпоративных клиентов действуют специальные условия доставки и оплаты
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DeliveryPage;
