import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Hammer',
      title: 'Изготовление садовой мебели',
      description: 'Создаём уникальную мебель по вашим размерам и пожеланиям из качественной древесины'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт садовой мебели',
      description: 'Восстанавливаем, реставрируем и обновляем вашу любимую садовую мебель'
    },
    {
      icon: 'Paintbrush',
      title: 'Обработка и защита',
      description: 'Профессиональная обработка защитными составами для долговечности изделий'
    },
    {
      icon: 'Ruler',
      title: 'Индивидуальный дизайн',
      description: 'Разработка уникального дизайна мебели под стиль вашего участка'
    }
  ];

  const priceList = [
    { item: 'Садовая скамейка (стандартная)', price: 'от 8 000 ₽' },
    { item: 'Комплект стол + 4 стула', price: 'от 25 000 ₽' },
    { item: 'Качели садовые', price: 'от 15 000 ₽' },
    { item: 'Беседка 3x3м', price: 'от 45 000 ₽' },
    { item: 'Ремонт садовой мебели', price: 'от 2 000 ₽' },
    { item: 'Обработка защитными составами', price: 'от 1 500 ₽' }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/60881bec-daad-4f6b-a32b-fca0d82bf5ad/files/190545b5-23de-46f5-bac4-40981a5d09a5.jpg',
      title: 'Комплект садовой мебели'
    },
    {
      url: 'https://cdn.poehali.dev/projects/60881bec-daad-4f6b-a32b-fca0d82bf5ad/files/c81232f3-b0a7-49e3-b4a7-1831c2c27f09.jpg',
      title: 'Садовая скамейка'
    },
    {
      url: 'https://cdn.poehali.dev/projects/60881bec-daad-4f6b-a32b-fca0d82bf5ad/files/875c2d9b-21ff-41bd-8da1-e1c68a40c6d5.jpg',
      title: 'Качели садовые'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Hammer" className="text-primary" size={28} />
              <span className="text-xl font-bold text-primary">Мастерская Васюкова</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'about', label: 'О мастерской' },
                { id: 'price', label: 'Прайс' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button asChild className="hidden md:flex">
              <a href="tel:+79900075060">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Садовая мебель из натурального дерева
              </h1>
              <p className="text-xl text-muted-foreground">
                Изготовление и ремонт садовой мебели в Мелитополе. Качество, проверенное временем.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+79900075060">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 990 007 50 60
                  </a>
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('price')}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Прайс-лист
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src={gallery[0].url}
                alt="Садовая мебель"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">О мастерской</h2>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Мастерская Алексея Васюкова специализируется на изготовлении и ремонте садовой мебели из натурального дерева. 
              Более 15 лет мы создаём качественные изделия, которые служат десятилетиями.
            </p>
            <p>
              Мы используем только отборную древесину и современные технологии обработки, что гарантирует долговечность 
              и красоту каждого изделия. Индивидуальный подход к каждому заказу позволяет создавать мебель, которая 
              идеально впишется в ваш сад.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Выполненных заказов</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Прайс-лист</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {priceList.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-6 hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-medium">{item.item}</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-muted/30 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  * Точная стоимость рассчитывается индивидуально после осмотра и согласования проекта
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="User" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Мастер</h3>
                    <p className="text-muted-foreground">Алексей Васюков</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+79900075060" className="text-primary hover:underline">
                      +7 990 007 50 60
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Мелитополь</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Готовы заказать?</h3>
                <p className="opacity-90">
                  Позвоните нам, и мы ответим на все ваши вопросы, поможем с выбором и рассчитаем стоимость заказа
                </p>
                <Button size="lg" variant="secondary" asChild className="w-full">
                  <a href="tel:+79900075060">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить сейчас
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Мастерская Алексея Васюкова. Изготовление и ремонт садовой мебели</p>
        </div>
      </footer>
    </div>
  );
}
