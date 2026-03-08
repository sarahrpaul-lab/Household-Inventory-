import { useState } from "react";

const initialData = {
  freezer: {
    icon: "🧊",
    color: "#1a6b8a",
    lightColor: "#e8f4f8",
    accentColor: "#2196b0",
    sections: {
      "🍓 Fruit": [],
      "🌿 Veg + Herbs": [
        { id: 1, name: "Butternut squash chunks", note: "" },
        { id: 2, name: "Sweetcorn", note: "" },
        { id: 3, name: "Mixed veg", note: "" },
        { id: 4, name: "Chopped garlic", note: "" },
        { id: 5, name: "Chopped ginger", note: "" },
      ],
      "🐟 Meat / Fish": [
        { id: 6, name: "Salmon fillets", note: "x 2" },
        { id: 7, name: "Burgers", note: "x 2" },
        { id: 8, name: "Bolognaise portions", note: "x 2 (me)" },
        { id: 9, name: "Bolognaise portions", note: "x 2 (C)" },
        { id: 10, name: "Prawns", note: "small portion" },
        { id: 11, name: "Fish fingers", note: "" },
      ],
      "🥦 Vegetarian": [
        { id: 12, name: "Tofu curry", note: "small" },
        { id: 13, name: "Breakfast burritos", note: "x 2" },
        { id: 14, name: "Veggie sausages", note: "x 2" },
        { id: 15, name: "Pulled BBQ pieces", note: "" },
        { id: 16, name: "Quorn pieces", note: "" },
        { id: 17, name: "Small curry", note: "" },
      ],
      "🍞 Breads": [
        { id: 18, name: "White bagel", note: "½" },
        { id: 19, name: "Everything bagels", note: "x 3" },
        { id: 20, name: "Sourdough spelt loaf", note: "" },
        { id: 21, name: "Aloo parantha", note: "" },
        { id: 22, name: "Regular parantha", note: "" },
      ],
      "👶 Annika": [
        { id: 23, name: "Lamb meatballs", note: "x 2" },
      ],
      "📦 Misc": [
        { id: 24, name: "Puff pastry roll", note: "" },
      ],
    }
  },
  household: {
    icon: "🏠",
    color: "#5a3e7a",
    lightColor: "#f0eaf8",
    accentColor: "#7c5aa6",
    sections: {
      "👶 Baby": [
        { id: 400, name: "Nappies", note: "" },
        { id: 401, name: "Wet wipes", note: "" },
        { id: 402, name: "Nappy cream", note: "" },
        { id: 403, name: "Toothpaste", note: "" },
        { id: 404, name: "Baby wash", note: "" },
      ],
      "🍽️ General Kitchen": [
        { id: 405, name: "Kitchen roll", note: "" },
        { id: 406, name: "Black bags", note: "" },
        { id: 407, name: "Foil", note: "" },
        { id: 408, name: "Kitchen spray", note: "" },
        { id: 409, name: "Dishwasher detergent", note: "" },
        { id: 410, name: "Washing up liquid", note: "x 2" },
        { id: 411, name: "Hand wash", note: "x 2" },
      ],
      "🚿 Bathroom": [
        { id: 412, name: "Toilet roll", note: "" },
        { id: 413, name: "Toothpaste", note: "" },
        { id: 414, name: "Floss", note: "" },
      ],
      "🧺 Laundry": [
        { id: 415, name: "Laundry detergent", note: "" },
        { id: 416, name: "Stain remover", note: "" },
      ],
    }
  },
  pantry: {
    icon: "🥫",
    color: "#6b3a1a",
    lightColor: "#f8f0e8",
    accentColor: "#b05a21",
    sections: {
      "🫘 Beans / Pulses": [
        { id: 101, name: "Tinned lentils", note: "x 2" },
        { id: 102, name: "Tinned kidney beans", note: "x 1" },
        { id: 103, name: "Red lentils", note: "" },
        { id: 104, name: "Toor dal", note: "" },
        { id: 105, name: "Dried lentils", note: "" },
        { id: 106, name: "Yellow split peas", note: "" },
      ],
      "🥫 Tinned Goods": [
        { id: 114, name: "Tuna", note: "x 3" },
        { id: 115, name: "Tinned tomatoes (400g)", note: "x 2" },
        { id: 116, name: "Tinned mushrooms", note: "x 1" },
        { id: 117, name: "Tinned tomatoes (800g)", note: "x 1" },
      ],
      "🌾 Grains": [
        { id: 107, name: "Rigatoni", note: "3 portions" },
        { id: 108, name: "Flour tortillas (small)", note: "x 10 pack" },
        { id: 109, name: "Rice papers", note: "" },
        { id: 110, name: "Noodle packets", note: "x 3" },
        { id: 111, name: "Orzo", note: "" },
        { id: 112, name: "Spelt penne", note: "" },
        { id: 113, name: "Edamame fettucine", note: "" },
      ],
      "🍶 Condiments": [
        { id: 119, name: "Veg stock", note: "low / tinned" },
        { id: 120, name: "Low chicken stock", note: "" },
        { id: 121, name: "Tomato purée", note: "low" },
        { id: 122, name: "Maple syrup", note: "" },
        { id: 123, name: "Lemon juice", note: "" },
        { id: 125, name: "Mustard", note: "" },
        { id: 126, name: "Chilli oil", note: "" },
        { id: 127, name: "Mayo", note: "" },
        { id: 128, name: "Tabasco", note: "" },
      ],
      "🥣 Sauces / Pastes": [
        { id: 118, name: "Massaman curry paste", note: "" },
        { id: 129, name: "Rose harissa paste", note: "" },
        { id: 132, name: "White miso", note: "" },
        { id: 124, name: "Fish sauce", note: "" },
      ],
      "🫙 Jars + Pickles": [
        { id: 130, name: "Caramelised onion chutney", note: "" },
        { id: 131, name: "Lime pickle", note: "" },
        { id: 133, name: "Pickles", note: "" },
      ],
      "🫙 Oils + Vinegars": [
        { id: 134, name: "Coconut oil", note: "" },
        { id: 135, name: "Olive oil", note: "x 2" },
        { id: 136, name: "Spray oil", note: "" },
        { id: 137, name: "Toasted sesame oil", note: "x 2" },
        { id: 138, name: "Flax oil", note: "x 3" },
        { id: 139, name: "Ghee", note: "" },
        { id: 140, name: "Red wine vinegar", note: "" },
        { id: 141, name: "Balsamic vinegar", note: "" },
      ],
      "🧁 Baking": [
        { id: 142, name: "Corn starch", note: "" },
        { id: 143, name: "Baking powder", note: "" },
        { id: 144, name: "Flour", note: "~½ cup" },
        { id: 145, name: "Flaxseed meal", note: "" },
        { id: 151, name: "Sugar", note: "" },
        { id: 152, name: "Dark brown soft sugar", note: "" },
        { id: 153, name: "Baking soda", note: "" },
      ],
      "🌰 Nuts + Seeds": [
        { id: 146, name: "Hemp seeds", note: "nearly empty" },
        { id: 147, name: "PB powder", note: "½ tbsp" },
        { id: 148, name: "Mixed seeds", note: "" },
        { id: 149, name: "Almonds", note: "" },
        { id: 150, name: "Chia seeds", note: "" },
        { id: 154, name: "Chopped walnuts", note: "" },
        { id: 155, name: "Pistachios", note: "" },
      ],
      "🥜 Misc": [
        { id: 156, name: "Roasted peppers", note: "" },
        { id: 157, name: "Peanut butter", note: "" },
        { id: 158, name: "Almond butter", note: "" },
        { id: 159, name: "Brewer's yeast", note: "" },
        { id: 160, name: "Nutritional yeast", note: "" },
        { id: 161, name: "Vanilla essence", note: "" },
        { id: 162, name: "Peppermint essence", note: "" },
      ],
      "🥣 Cereals": [
        { id: 163, name: "Weetabix", note: "" },
      ],
      "👶 Annika (Pantry)": [
        { id: 164, name: "Meal pouch", note: "x 1 main" },
        { id: 165, name: "Berry yoghurt", note: "x 1" },
        { id: 166, name: "RTG milk", note: "x 2" },
        { id: 167, name: "Snack melty sticks", note: "" },
      ],
      "☕ Teas / Coffees": [
        { id: 230, name: "Tea", note: "" },
        { id: 231, name: "Decaf tea", note: "" },
        { id: 232, name: "Coffee", note: "" },
        { id: 233, name: "Decaf coffee", note: "" },
        { id: 234, name: "Cocoa powder", note: "" },
      ],
      "🌶️ Spices": [
        { id: 200, name: "Garlic powder", note: "x 2" },
        { id: 201, name: "Cumin", note: "x 2" },
        { id: 202, name: "Smoked paprika", note: "" },
        { id: 203, name: "Chilli flakes", note: "" },
        { id: 204, name: "Curry powder", note: "" },
        { id: 205, name: "Cinnamon", note: "x 2" },
        { id: 206, name: "Whole nutmeg", note: "" },
        { id: 207, name: "Turmeric", note: "" },
        { id: 208, name: "Coriander seeds", note: "" },
        { id: 209, name: "Ground fenugreek", note: "" },
        { id: 210, name: "Cayenne", note: "" },
        { id: 211, name: "Saffron", note: "" },
      ],
      "🫙 Spice Mixes": [
        { id: 212, name: "Cajun seasoning", note: "" },
        { id: 213, name: "Garam masala", note: "" },
        { id: 214, name: "Middle Eastern", note: "" },
        { id: 215, name: "Harissa spice mix", note: "" },
        { id: 216, name: "Italian seasoning", note: "" },
      ],
      "🌿 Herbs": [
        { id: 217, name: "Mint", note: "" },
        { id: 218, name: "Parsley", note: "" },
        { id: 219, name: "Basil", note: "" },
        { id: 220, name: "Oregano", note: "" },
        { id: 221, name: "Dill", note: "" },
        { id: 222, name: "Thyme", note: "" },
      ],
    }
  }
};

let nextId = 300;

export default function App() {
  const [data, setData] = useState(initialData);
  const [checked, setChecked] = useState({});
  const [activeTab, setActiveTab] = useState("freezer");
  const [view, setView] = useState("inventory");
  const [adding, setAdding] = useState(null);
  const [newItem, setNewItem] = useState({ name: "", note: "" });
  const [editingNote, setEditingNote] = useState(null);
  const [editingName, setEditingName] = useState(null);
  const [search, setSearch] = useState("");
  const [showChecked, setShowChecked] = useState(true);
  const [shopList, setShopList] = useState([]);
  const [shopSelecting, setShopSelecting] = useState(false);
  const [selected, setSelected] = useState({});
  const [newShopItem, setNewShopItem] = useState("");
  const [addingShop, setAddingShop] = useState(false);

  const toggleCheck = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleSelect = (id) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));

  const removeItem = (store, section, id) => {
    setData(prev => ({
      ...prev,
      [store]: { ...prev[store], sections: { ...prev[store].sections, [section]: prev[store].sections[section].filter(i => i.id !== id) } }
    }));
    setChecked(prev => { const n = {...prev}; delete n[id]; return n; });
    setSelected(prev => { const n = {...prev}; delete n[id]; return n; });
  };

  const addItem = (store, section) => {
    if (!newItem.name.trim()) return;
    const item = { id: nextId++, name: newItem.name.trim(), note: newItem.note.trim() };
    setData(prev => ({
      ...prev,
      [store]: { ...prev[store], sections: { ...prev[store].sections, [section]: [...prev[store].sections[section], item] } }
    }));
    setNewItem({ name: "", note: "" });
    setAdding(null);
  };

  const updateName = (store, section, id, name) => {
    setData(prev => ({
      ...prev,
      [store]: { ...prev[store], sections: { ...prev[store].sections, [section]: prev[store].sections[section].map(i => i.id === id ? {...i, name} : i) } }
    }));
  };

  const updateNote = (store, section, id, note) => {
    setData(prev => ({
      ...prev,
      [store]: { ...prev[store], sections: { ...prev[store].sections, [section]: prev[store].sections[section].map(i => i.id === id ? {...i, note} : i) } }
    }));
  };

  const addSelectedToShopList = () => {
    const allItems = Object.values(data.freezer.sections).flat().concat(Object.values(data.pantry.sections).flat()).concat(Object.values(data.household.sections).flat());
    const toAdd = allItems.filter(i => selected[i.id] && !shopList.find(s => s.id === i.id));
    setShopList(prev => [...prev, ...toAdd.map(i => ({ id: i.id, name: i.name, note: i.note, bought: false }))]);
    setSelected({});
    setShopSelecting(false);
    setView("shopping");
  };

  const toggleBought = (id) => setShopList(prev => prev.map(i => i.id === id ? {...i, bought: !i.bought} : i));
  const removeShopItem = (id) => setShopList(prev => prev.filter(i => i.id !== id));
  const addManualShopItem = () => {
    if (!newShopItem.trim()) return;
    setShopList(prev => [...prev, { id: nextId++, name: newShopItem.trim(), note: "", bought: false }]);
    setNewShopItem("");
    setAddingShop(false);
  };

  const store = data[activeTab];
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const selectedCount = Object.values(selected).filter(Boolean).length;
  const boughtCount = shopList.filter(i => i.bought).length;

  const filteredSections = Object.entries(store.sections).reduce((acc, [sec, items]) => {
    const filtered = items.filter(item => {
      const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
      const matchChecked = showChecked || !checked[item.id];
      return matchSearch && matchChecked;
    });
    if (filtered.length > 0 || !search) acc[sec] = filtered;
    return acc;
  }, {});

  const [showEssentials, setShowEssentials] = useState(false);

  const essentials = [
    { category: "🥛 Dairy & Eggs", items: ["Whole milk", "Semi-skimmed milk", "Unsweetened soy milk", "Eggs", "Greek yoghurt", "0% Greek yoghurt", "Protein yoghurts", "Cheese slices", "Haloumi", "Feta"] },
    { category: "🥦 Fresh Veg", items: ["Onions", "Garlic", "Ginger", "Mushrooms", "Spinach", "Broccoli", "Tomatoes", "Courgette", "Peppers", "Avocado", "Mixed leaves"] },
    { category: "🍎 Fresh Fruit", items: ["Bananas", "Apples", "Berries", "Lemons", "Lime", "Melon"] },
    { category: "🍞 Bakery", items: ["Bread", "Wraps", "Pitta"] },
    { category: "🏠 Household", items: ["Toilet roll", "Kitchen roll", "Nappies", "Wet wipes"] },
    { category: "🥩 Meat, Fish, Veg Protein", items: ["Chicken breast", "Minced beef", "Turkey mince", "Salmon", "Tofu"] },
  ];

  const addEssential = (name) => {
    if (!shopList.find(i => i.name === name)) {
      setShopList(prev => [...prev, { id: nextId++, name, note: "", bought: false }]);
    }
  };

  // ── SHOPPING LIST VIEW ──
  if (view === "shopping") {
    const remaining = shopList.filter(i => !i.bought);
    const bought = shopList.filter(i => i.bought);
    return (
      <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", minHeight: "100vh", background: "#faf8f5", color: "#2a2a2a" }}>
        <div style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)", padding: "28px 24px 20px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <h1 style={{ margin: 0, fontSize: 26, fontWeight: "normal", color: "white", letterSpacing: "0.02em" }}>🛒 Shopping List</h1>
                <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
                  {remaining.length} to get{boughtCount > 0 ? ` · ${boughtCount} done` : ""}
                </p>
              </div>
              <button onClick={() => setView("inventory")} style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", color: "white", borderRadius: 20, padding: "6px 14px", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                ← Inventory
              </button>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => { setShopSelecting(true); setView("inventory"); }} style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", color: "white", borderRadius: 20, padding: "7px 16px", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                + From inventory
              </button>
              <button onClick={() => setAddingShop(true)} style={{ background: "white", border: "none", color: "#2d6a4f", borderRadius: 20, padding: "7px 16px", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: "bold" }}>
                + Add manually
              </button>
              <button onClick={() => setShowEssentials(p => !p)} style={{ background: showEssentials ? "white" : "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: showEssentials ? "#2d6a4f" : "white", borderRadius: 20, padding: "7px 16px", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                ⭐ Essentials
              </button>
              {boughtCount > 0 && (
                <button onClick={() => setShopList(prev => prev.filter(i => !i.bought))} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", borderRadius: 20, padding: "7px 14px", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif", marginLeft: "auto" }}>
                  Clear done
                </button>
              )}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 16px 80px" }}>
          {addingShop && (
            <div style={{ background: "white", borderRadius: 10, padding: "14px 16px", marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", gap: 8, alignItems: "center" }}>
              <input autoFocus placeholder="Item name..." value={newShopItem} onChange={e => setNewShopItem(e.target.value)} onKeyDown={e => { if (e.key === "Enter") addManualShopItem(); if (e.key === "Escape") setAddingShop(false); }} style={{ flex: 1, padding: "8px 12px", borderRadius: 6, border: "1px solid #40916c", fontSize: 14, fontFamily: "Georgia, serif", outline: "none" }} />
              <button onClick={addManualShopItem} style={{ background: "#40916c", color: "white", border: "none", borderRadius: 6, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif" }}>Add</button>
              <button onClick={() => setAddingShop(false)} style={{ background: "none", border: "1px solid #ddd", borderRadius: 6, padding: "8px 12px", cursor: "pointer", fontSize: 13, color: "#888", fontFamily: "Georgia, serif" }}>Cancel</button>
            </div>
          )}

          {showEssentials && (
            <div style={{ background: "white", borderRadius: 10, padding: "16px", marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: 14, fontWeight: "bold", color: "#2a2a2a" }}>⭐ Essentials — tap to add</span>
                <button onClick={() => setShowEssentials(false)} style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
              </div>
              {essentials.map(group => (
                <div key={group.category} style={{ marginBottom: 14 }}>
                  <p style={{ margin: "0 0 8px", fontSize: 11, color: "#888", letterSpacing: "0.05em", fontWeight: "bold" }}>{group.category.toUpperCase()}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {group.items.map(item => {
                      const onList = shopList.some(i => i.name === item);
                      return (
                        <button key={item} onClick={() => !onList && addEssential(item)} style={{ background: onList ? "#e8f5e9" : "#f5f5f5", border: onList ? "1px solid #a5d6a7" : "1px solid #e0e0e0", color: onList ? "#2d6a4f" : "#444", borderRadius: 20, padding: "5px 12px", fontSize: 13, cursor: onList ? "default" : "pointer", fontFamily: "Georgia, serif", transition: "all 0.15s" }}>
                          {onList ? "✓ " : ""}{item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}


            <div style={{ textAlign: "center", padding: "60px 20px", color: "#aaa" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🛒</div>
              <p style={{ fontSize: 15, fontStyle: "italic" }}>Your shopping list is empty.</p>
              <p style={{ fontSize: 13 }}>Add items from your inventory or manually above.</p>
            </div>
          )}

          {remaining.length > 0 && (
            <div style={{ background: "white", borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: 16 }}>
              {remaining.map((item, idx) => (
                <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: idx < remaining.length - 1 ? "1px solid #f0f0f0" : "none", gap: 12 }}>
                  <div onClick={() => toggleBought(item.id)} style={{ width: 22, height: 22, borderRadius: 11, border: "2px solid #40916c", background: "white", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 14, color: "#2a2a2a" }}>{item.name}</span>
                    {item.note && <span style={{ display: "block", fontSize: 11, color: "#888", marginTop: 2 }}>{item.note}</span>}
                  </div>
                  <button onClick={() => removeShopItem(item.id)} style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: 18, padding: "0 2px", lineHeight: 1 }}>×</button>
                </div>
              ))}
            </div>
          )}

          {bought.length > 0 && (
            <div>
              <p style={{ fontSize: 12, color: "#aaa", marginBottom: 8, paddingLeft: 4, letterSpacing: "0.05em" }}>DONE</p>
              <div style={{ background: "white", borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", opacity: 0.7 }}>
                {bought.map((item, idx) => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: idx < bought.length - 1 ? "1px solid #f0f0f0" : "none", gap: 12 }}>
                    <div onClick={() => toggleBought(item.id)} style={{ width: 22, height: 22, borderRadius: 11, border: "none", background: "#40916c", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "white", fontSize: 12 }}>✓</span>
                    </div>
                    <span style={{ flex: 1, fontSize: 14, color: "#aaa", textDecoration: "line-through" }}>{item.name}</span>
                    <button onClick={() => removeShopItem(item.id)} style={{ background: "none", border: "none", color: "#ddd", cursor: "pointer", fontSize: 18, padding: "0 2px", lineHeight: 1 }}>×</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── INVENTORY VIEW ──
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", minHeight: "100vh", background: "#faf8f5", color: "#2a2a2a" }}>
      <div style={{ background: `linear-gradient(135deg, ${store.color} 0%, ${store.accentColor} 100%)`, padding: "28px 24px 20px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 26, fontWeight: "normal", color: "white", letterSpacing: "0.02em" }}>Kitchen Inventory</h1>
              {shopSelecting ? (
                <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.9)", fontSize: 13 }}>
                  {selectedCount > 0 ? `${selectedCount} selected — tap "Add to list" when done` : "Tap items to select them"}
                </p>
              ) : (
                <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                  {checkedCount > 0 ? `${checkedCount} used · ` : ""}Double-tap name to edit
                </p>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
              {shopSelecting ? (
                <>
                  <button onClick={addSelectedToShopList} disabled={selectedCount === 0} style={{ background: selectedCount > 0 ? "white" : "rgba(255,255,255,0.3)", border: "none", color: selectedCount > 0 ? store.color : "rgba(255,255,255,0.5)", borderRadius: 20, padding: "6px 14px", fontSize: 12, cursor: selectedCount > 0 ? "pointer" : "default", fontFamily: "Georgia, serif", fontWeight: "bold", transition: "all 0.2s" }}>
                    Add {selectedCount > 0 ? selectedCount : ""} to list →
                  </button>
                  <button onClick={() => { setShopSelecting(false); setSelected({}); }} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", borderRadius: 20, padding: "5px 12px", fontSize: 11, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => setView("shopping")} style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", color: "white", borderRadius: 20, padding: "6px 14px", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                    🛒 {shopList.length > 0 ? `List (${shopList.filter(i => !i.bought).length})` : "Shopping list"}
                  </button>
                  <button onClick={() => setShowChecked(!showChecked)} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", borderRadius: 20, padding: "5px 12px", fontSize: 11, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                    {showChecked ? "Hide used" : "Show used"}
                  </button>
                </>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: shopSelecting ? 0 : 14, flexWrap: "wrap" }}>
            {["freezer", "pantry", "household"].map(tab => (
              <button key={tab} onClick={() => { setActiveTab(tab); setSearch(""); }} style={{ background: activeTab === tab ? "white" : "rgba(255,255,255,0.2)", color: activeTab === tab ? store.color : "white", border: "none", borderRadius: 24, padding: "8px 20px", fontSize: 14, cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: activeTab === tab ? "bold" : "normal", transition: "all 0.2s" }}>
                {data[tab].icon} {tab === "household" ? "Baby / Household" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            {!shopSelecting && (
              <button onClick={() => { setShopSelecting(true); setSelected({}); }} style={{ marginLeft: "auto", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "white", borderRadius: 24, padding: "8px 16px", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                + Add to list
              </button>
            )}
          </div>

          {!shopSelecting && (
            <input placeholder="Search items..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: "100%", padding: "10px 16px", borderRadius: 24, border: "none", background: "rgba(255,255,255,0.9)", fontSize: 14, fontFamily: "Georgia, serif", color: "#333", boxSizing: "border-box", outline: "none" }} />
          )}
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 16px 80px" }}>
        {shopSelecting && (
          <div style={{ background: "#fffbea", border: "1px solid #f0d080", borderRadius: 8, padding: "10px 14px", marginBottom: 14, fontSize: 13, color: "#7a6000" }}>
            Tap items to select, then tap <strong>Add to list</strong> in the top right.
          </div>
        )}

        {Object.entries(filteredSections).map(([section, items]) => (
          <div key={section} style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: store.color, borderRadius: "10px 10px 0 0" }}>
              <span style={{ color: "white", fontSize: 13, fontWeight: "bold", letterSpacing: "0.05em" }}>{section.toUpperCase()}</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>{items.filter(i => !checked[i.id]).length} / {items.length}</span>
            </div>

            <div style={{ background: "white", borderRadius: "0 0 10px 10px", border: `1px solid ${store.lightColor}`, borderTop: "none", overflow: "hidden" }}>
              {items.length === 0 && (
                <div style={{ padding: "14px 16px", color: "#aaa", fontSize: 13, fontStyle: "italic" }}>Nothing here yet</div>
              )}
              {items.map((item, idx) => {
                const isSelected = !!selected[item.id];
                const alreadyOnList = shopList.some(s => s.id === item.id);
                return (
                  <div key={item.id}
                    onClick={shopSelecting && !alreadyOnList ? () => toggleSelect(item.id) : undefined}
                    style={{ display: "flex", alignItems: "center", padding: "11px 14px", background: shopSelecting ? (isSelected ? store.lightColor : (alreadyOnList ? "#f8f8f8" : (idx % 2 === 0 ? "white" : "#fafafa"))) : (checked[item.id] ? "#f8f8f8" : (idx % 2 === 0 ? "white" : store.lightColor + "55")), borderBottom: idx < items.length - 1 ? `1px solid ${store.lightColor}` : "none", transition: "background 0.15s", gap: 10, cursor: shopSelecting ? (alreadyOnList ? "default" : "pointer") : "default" }}
                  >
                    {shopSelecting ? (
                      <div style={{ width: 22, height: 22, borderRadius: 11, border: alreadyOnList ? "2px solid #ccc" : (isSelected ? "none" : `2px solid ${store.accentColor}`), background: alreadyOnList ? "#eee" : (isSelected ? store.accentColor : "white"), flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                        {(isSelected || alreadyOnList) && <span style={{ color: "white", fontSize: 11 }}>✓</span>}
                      </div>
                    ) : (
                      <div onClick={() => toggleCheck(item.id)} style={{ width: 20, height: 20, borderRadius: 5, border: checked[item.id] ? "none" : `2px solid ${store.accentColor}`, background: checked[item.id] ? store.accentColor : "white", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                        {checked[item.id] && <span style={{ color: "white", fontSize: 12, lineHeight: 1 }}>✓</span>}
                      </div>
                    )}

                    <div style={{ flex: 1, minWidth: 0 }}>
                      {!shopSelecting && editingName === item.id ? (
                        <input autoFocus value={item.name} onChange={e => updateName(activeTab, section, item.id, e.target.value)} onBlur={() => setEditingName(null)} onKeyDown={e => { if (e.key === "Enter" || e.key === "Escape") setEditingName(null); }} style={{ fontSize: 14, color: "#2a2a2a", border: `1px solid ${store.accentColor}`, borderRadius: 4, padding: "2px 6px", fontFamily: "Georgia, serif", width: "100%", outline: "none", background: "white" }} />
                      ) : (
                        <span onDoubleClick={!shopSelecting ? () => setEditingName(item.id) : undefined} style={{ fontSize: 14, color: alreadyOnList && shopSelecting ? "#aaa" : (checked[item.id] && !shopSelecting ? "#aaa" : "#2a2a2a"), textDecoration: checked[item.id] && !shopSelecting ? "line-through" : "none", transition: "all 0.2s", cursor: shopSelecting ? "pointer" : "text", display: "block" }}>
                          {item.name}
                          {shopSelecting && alreadyOnList && <span style={{ fontSize: 11, color: "#bbb", marginLeft: 8, fontStyle: "italic" }}>already on list</span>}
                        </span>
                      )}
                      {!shopSelecting ? (
                        editingNote === item.id ? (
                          <input autoFocus value={item.note} onChange={e => updateNote(activeTab, section, item.id, e.target.value)} onBlur={() => setEditingNote(null)} onKeyDown={e => e.key === "Enter" && setEditingNote(null)} style={{ display: "block", marginTop: 3, fontSize: 12, color: store.accentColor, border: `1px solid ${store.accentColor}`, borderRadius: 4, padding: "2px 6px", fontFamily: "Georgia, serif", width: "100%", maxWidth: 200, outline: "none" }} />
                        ) : item.note ? (
                          <span onClick={() => setEditingNote(item.id)} style={{ display: "block", fontSize: 11, color: store.accentColor, marginTop: 2, cursor: "text", opacity: checked[item.id] ? 0.5 : 1 }}>{item.note}</span>
                        ) : (
                          <span onClick={() => setEditingNote(item.id)} style={{ display: "block", fontSize: 11, color: "#ccc", marginTop: 2, cursor: "text" }}>+ add note</span>
                        )
                      ) : item.note ? (
                        <span style={{ display: "block", fontSize: 11, color: "#aaa", marginTop: 2 }}>{item.note}</span>
                      ) : null}
                    </div>

                    {!shopSelecting && (
                      <button onClick={() => removeItem(activeTab, section, item.id)} style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: 16, padding: "0 2px", lineHeight: 1, flexShrink: 0 }}>×</button>
                    )}
                  </div>
                );
              })}

              {!shopSelecting && (
                adding?.store === activeTab && adding?.section === section ? (
                  <div style={{ padding: "10px 14px", background: store.lightColor + "88", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <input autoFocus placeholder="Item name" value={newItem.name} onChange={e => setNewItem(p => ({...p, name: e.target.value}))} onKeyDown={e => { if (e.key === "Enter") addItem(activeTab, section); if (e.key === "Escape") setAdding(null); }} style={{ flex: 2, minWidth: 120, padding: "7px 10px", borderRadius: 6, border: `1px solid ${store.accentColor}`, fontSize: 13, fontFamily: "Georgia, serif", outline: "none" }} />
                    <input placeholder="Note (optional)" value={newItem.note} onChange={e => setNewItem(p => ({...p, note: e.target.value}))} onKeyDown={e => { if (e.key === "Enter") addItem(activeTab, section); if (e.key === "Escape") setAdding(null); }} style={{ flex: 1, minWidth: 80, padding: "7px 10px", borderRadius: 6, border: "1px solid #ddd", fontSize: 13, fontFamily: "Georgia, serif", outline: "none" }} />
                    <button onClick={() => addItem(activeTab, section)} style={{ background: store.accentColor, color: "white", border: "none", borderRadius: 6, padding: "7px 14px", cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif" }}>Add</button>
                    <button onClick={() => setAdding(null)} style={{ background: "none", border: "1px solid #ddd", borderRadius: 6, padding: "7px 10px", cursor: "pointer", fontSize: 13, color: "#888", fontFamily: "Georgia, serif" }}>Cancel</button>
                  </div>
                ) : (
                  <div onClick={() => { setAdding({ store: activeTab, section }); setNewItem({ name: "", note: "" }); }} style={{ padding: "9px 14px", color: store.accentColor, fontSize: 13, cursor: "pointer", borderTop: items.length > 0 ? `1px dashed ${store.lightColor}` : "none", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> Add item
                  </div>
                )
              )}
            </div>
          </div>
        ))}

        {!shopSelecting && checkedCount > 0 && (
          <button onClick={() => setChecked({})} style={{ display: "block", margin: "8px auto 0", background: "none", border: "1px solid #ccc", borderRadius: 20, padding: "8px 20px", fontSize: 13, color: "#888", cursor: "pointer", fontFamily: "Georgia, serif" }}>
            Clear all ticks ({checkedCount})
          </button>
        )}
      </div>
    </div>
  );
