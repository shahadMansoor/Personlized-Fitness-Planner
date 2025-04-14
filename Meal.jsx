import React from 'react';
import UserSidebar from '../components/UserSidebar'; // make sure path is correct

const Meal = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <UserSidebar />

      {/* Meal Page Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Meal</h1>

        <div className="bg-green-100 text-green-900 font-semibold inline-block px-4 py-2 rounded mb-6">
          Today Meal
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { title: 'Breakfast', kcal: 350, desc: 'Scrambled Egg & Avocado Toast\nBlack coffee or green tea' },
            { title: 'Snack', kcal: 150, desc: 'Greek Yogurt & Almonds' },
            { title: 'Lunch', kcal: 400, desc: 'Grilled Chicken Salad' },
            { title: 'Snack', kcal: 150, desc: 'Apple & Peanut Butter' },
            { title: 'Dinner', kcal: 400, desc: 'Salmon & Quinoa Bowl' },
            { title: 'Snack', kcal: 100, desc: 'Chamomile Tea & Dark Chocolate (if needed)' },
          ].map((item, i) => (
            <div key={i} className="bg-green-200 p-4 rounded shadow-sm">
              <h2 className="font-bold">{item.title} — {item.kcal} kcal</h2>
              <p className="text-sm whitespace-pre-line mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-700 mb-6">
          This meal plan is designed to be nutrient-dense, low in calories, and high in protein and fiber to keep you full and energized while promoting weight loss.<br />
          <strong>Total Calories: 1500 kcal</strong>
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="font-semibold mb-2">Tips:</h3>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Drink at least 2–3 liters of water throughout the day!</li>
            <li>Avoid sugary drinks and opt for herbal teas or infused water.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Meal;
