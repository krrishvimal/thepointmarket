import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles } from 'lucide-react';

const getTagIcon = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('best seller')) return '★';
  if (t.includes('surfer pick')) return '🌊';
  if (t.includes('triple protein') || t.includes('heavy meal')) return '💪';
  if (t.includes('local favorite') || t.includes('highly rated') || t.includes('staff favorite')) return '✦';
  if (t.includes('spicy')) return '🌶️';
  if (t.includes('vegetarian') || t.includes('vegan')) return '🌱';
  if (t.includes('sandwich')) return '🥪';
  if (t.includes('fresh & healthy') || t.includes('refreshing')) return '🍍';
  if (t.includes('premium pick')) return '👑';
  return '✦';
};

export default function InteractiveMenu({ openOrderModal }) {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [searchQuery, setSearchQuery] = useState('');

  const menuData = useMemo(() => {
    return [
      {
        id: 'barrel-burrito',
        name: 'The Barrel Burrito',
        category: 'breakfast',
        desc: 'Our iconic #1 best seller. Fluffy eggs, gold hash potatoes, crispy bacon, fresh sliced avocado, and cheddar cheese wrapped in a toasted flour tortilla.',
        price: 'Reg $10.50 | Lrg $13.50',
        tags: ['Best Seller', 'Surfer Pick']
      },
      {
        id: 'its-burrito',
        name: 'The "Its" Burrito',
        category: 'breakfast',
        desc: 'The ultimate triple protein fuel. Packed with eggs, gold hash potatoes, cheddar, avocado, smoked sausage, thick bacon, and shaved ham.',
        price: 'Reg $11.50 | Lrg $14.50',
        tags: ['Triple Protein', 'Heavy Meal']
      },
      {
        id: 'cali-breakfast',
        name: 'Cali Breakfast Burrito',
        category: 'breakfast',
        desc: 'Tender grilled carne asada steak, crispy french fries, eggs, melted jack cheese, and fresh pico de gallo rolled together.',
        price: 'Reg $11.95 | Lrg $14.95',
        tags: ['Local Favorite']
      },
      {
        id: 'mexi-cali-breakfast',
        name: 'Mexi-Cali Breakfast Burrito',
        category: 'breakfast',
        desc: 'Spicy local chorizo sausage, fluffy scrambled eggs, crispy fries, loaded pepper jack cheese, and roasted house salsa.',
        price: 'Reg $10.95 | Lrg $13.95',
        tags: ['Spicy']
      },
      {
        id: 'garden-point-breakfast',
        name: 'Pleasure Point Veggie Burrito',
        category: 'breakfast',
        desc: 'Fresh scrambled eggs, gold hash potatoes, spinach, sauteed mushrooms, sliced avocado, black beans, and cheddar.',
        price: 'Reg $9.95 | Lrg $12.95',
        tags: ['Vegetarian']
      },
      {
        id: 'classic-cali-lunch',
        name: 'Cali Lunch Burrito',
        category: 'lunch',
        desc: 'Marinated grilled steak (carne asada), hot golden fries, freshly guacamole, sour cream, and jack cheese.',
        price: '$14.25',
        tags: ['Highly Rated']
      },
      {
        id: 'surf-turf-burrito',
        name: 'Pleasure Point Surf & Turf',
        category: 'lunch',
        desc: 'Flame grilled carne asada steak paired with buttery garlic shrimp, seasoned rice, shredded cabbage, cheese, and spicy chipotle cream.',
        price: '$15.95',
        tags: ['Premium Pick']
      },
      {
        id: 'cliffside-club',
        name: 'East Cliff Chicken Club',
        category: 'lunch',
        desc: 'Deli sliced grilled chicken chicken breast, crispy bacon, provolone cheese, leaf lettuce, tomato, and garlic aioli on toasted sourdough.',
        price: '$12.50',
        tags: ['Sandwich']
      },
      {
        id: 'pleasure-point-turkey-pesto',
        name: 'Pleasure Point Turkey Pesto',
        category: 'lunch',
        desc: 'Shaved oven roasted turkey, provolone cheese, sliced tomato, baby spinach, and rich nut-free basil pesto spread on sweet Dutch crunch bread.',
        price: '$11.95',
        tags: ['Sandwich', 'Staff Favorite']
      },
      {
        id: 'pleasure-point-acai',
        name: 'Pleasure Point Acai Bowl',
        category: 'bowls',
        desc: 'Creamy pure organic acai base topped with hemp granola, fresh sliced bananas, strawberries, local blueberries, shredded coconut, and sweet honey drizzle.',
        price: '$10.95',
        tags: ['Fresh & Healthy', 'Vegetarian']
      },
      {
        id: 'barrel-green-smoothie',
        name: 'Barrel Green Smoothie',
        category: 'bowls',
        desc: 'Nutrient packed blend of fresh spinach, kale, frozen banana chunks, pineapple pieces, chia seeds, and coconut milk.',
        price: '$8.50',
        tags: ['Vegan', 'Refreshing']
      },
      {
        id: 'sunset-mango-smoothie',
        name: 'Sunset Mango Smoothie',
        category: 'bowls',
        desc: 'Sweet tropical blend of frozen mango, strawberries, fresh orange juice, and greek yogurt.',
        price: '$8.25',
        tags: ['Vegetarian']
      }
    ];
  }, []);

  const categories = [
    { id: 'breakfast', name: 'Breakfast Burritos' },
    { id: 'lunch', name: 'Lunch & Delis' },
    { id: 'bowls', name: 'Bowls & Smoothies' }
  ];

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menuData, activeCategory, searchQuery]);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        
        {/* Title Header */}
        <div className="section-header reveal">
          <div className="section-badge">
            <Sparkles className="w-4 h-4 text-[#C87A53]" />
            <span className="section-badge-text">Taste the Legend</span>
          </div>
          <h2 className="section-title">
            Pleasure Point Flagship Menu
          </h2>
          <p className="section-desc">
            Acclaimed breakfast burritos, hot skillet griddles, pressed deli sandwiches, and organic acai bowls. Every dish is rolled thick and cooked to order.
          </p>
        </div>

        {/* Filter and Search controls */}
        <div className="menu-filter-bar reveal reveal-delay-1">
          
          <div className="menu-categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`menu-cat-btn ${isActive ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="menu-search-wrapper">
            <Search className="menu-search-icon w-4 h-4" />
            <input
              type="text"
              placeholder="Search burritos, sandwiches, smoothies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
            />
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid reveal reveal-delay-2">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="menu-card"
              >
                <div>
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.name}</h3>
                    <div className="menu-card-leader"></div>
                    <span className="menu-card-price">{item.price}</span>
                  </div>

                  <p className="menu-card-desc">{item.desc}</p>
                </div>

                <div className="menu-card-footer">
                  <div className="menu-card-tags">
                    {item.tags.map((tag, idx) => {
                      const tagClass = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return (
                        <span key={idx} className={`menu-tag-pill ${tagClass}`}>
                          <span className="tag-icon">{getTagIcon(tag)}</span>
                          <span className="tag-text">{tag}</span>
                        </span>
                      );
                    })}
                  </div>

                  <button
                    onClick={openOrderModal}
                    className="menu-card-add-btn"
                  >
                    <span>Add to Order</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="menu-empty-state reveal">
            <span className="menu-empty-title">No Items Found</span>
            <p className="menu-empty-desc">Try widening your search terms or checking a different category.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('breakfast');
              }} 
              className="menu-empty-clear-btn"
            >
              Reset Search & Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
