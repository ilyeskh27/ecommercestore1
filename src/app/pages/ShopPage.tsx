import { useState, useMemo } from 'react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface ShopPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export function ShopPage({ onNavigate }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Extract unique colors and sizes
  const allColors = Array.from(new Set(products.flatMap((p) => p.color)));
  const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)));

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) =>
        p.color.some((color) => selectedColors.includes(color))
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((p) =>
        p.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, you'd sort by date
        filtered = [...filtered].reverse();
        break;
      default:
        // Featured sorting (bestsellers first)
        filtered = [...filtered].sort((a, b) => {
          if (a.bestseller && !b.bestseller) return -1;
          if (!a.bestseller && b.bestseller) return 1;
          return 0;
        });
    }

    return filtered;
  }, [selectedCategory, selectedColors, selectedSizes, priceRange, sortBy]);

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 500]);
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0 ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 500;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2">Shop All</h1>
        <p className="text-neutral-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-neutral-600 hover:text-neutral-900 underline"
              >
                Clear all filters
              </button>
            )}

            {/* Category */}
            <div>
              <h3 className="mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category.id}
                      onChange={() => setSelectedCategory(category.id)}
                      className="w-4 h-4 accent-[#C77D6A]"
                    />
                    <span className="flex-1">{category.name}</span>
                    <span className="text-neutral-400 text-sm">({category.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="mb-4">Color</h3>
              <div className="space-y-2">
                {allColors.map((color) => (
                  <label key={color} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleColor(color)}
                      className="w-4 h-4 accent-[#C77D6A]"
                    />
                    <span>{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 border transition-colors ${
                      selectedSizes.includes(size)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-300 hover:border-neutral-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="mb-4">Price</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#C77D6A]"
                />
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 border border-neutral-300"
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full px-3 py-2 border border-neutral-300"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Mobile filters and sort */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <button
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 border border-neutral-300 px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="bg-[#C77D6A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {selectedColors.length + selectedSizes.length + (selectedCategory !== 'all' ? 1 : 0)}
                </span>
              )}
            </button>

            <div className="relative ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-neutral-300 pl-4 pr-10 py-2 bg-white cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={(id) => onNavigate('product', id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-600 mb-4">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="text-[#C77D6A] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {filtersOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2>Filters</h2>
                <button onClick={() => setFiltersOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      clearFilters();
                      setFiltersOpen(false);
                    }}
                    className="text-sm text-neutral-600 hover:text-neutral-900 underline"
                  >
                    Clear all filters
                  </button>
                )}

                {/* Category */}
                <div>
                  <h3 className="mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={selectedCategory === category.id}
                          onChange={() => setSelectedCategory(category.id)}
                          className="w-4 h-4 accent-[#C77D6A]"
                        />
                        <span className="flex-1">{category.name}</span>
                        <span className="text-neutral-400 text-sm">({category.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="mb-4">Color</h3>
                  <div className="space-y-2">
                    {allColors.map((color) => (
                      <label key={color} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="w-4 h-4 accent-[#C77D6A]"
                        />
                        <span>{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="mb-4">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 border transition-colors ${
                          selectedSizes.includes(size)
                            ? 'border-neutral-900 bg-neutral-900 text-white'
                            : 'border-neutral-300 hover:border-neutral-900'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="mb-4">Price</h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-[#C77D6A]"
                    />
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border border-neutral-300"
                        placeholder="Min"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full px-3 py-2 border border-neutral-300"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full bg-neutral-900 text-white py-4 mt-8 hover:bg-neutral-800 transition-colors"
              >
                View {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
