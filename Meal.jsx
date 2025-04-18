import React from 'react';
import { useUserContext } from '../context/UserContext';

const Meal = () => {
  const { user } = useUserContext();

  const mealPlan = {
    Breakfast: [
      { name: 'Black Forest', desc: 'blueberry, raspberry, black berry, light yogurt' },
      { name: 'Cinnamon Porridge', desc: 'banana, almond, milk' },
    ],
    Lunch: [
      { name: 'Pesto Spinach', desc: 'spinach, pesto' },
      { name: 'Butter Bean Wrap', desc: 'bean, corn' },
    ],
    Dinner: [
      { name: 'Seard Salmon', desc: 'salmon, salt' },
      { name: 'Shrimp with Mashpoteto', desc: 'red shrimp, pesto' },
    ],
    Snacks: [
      { name: 'Green Apple', desc: '' },
      { name: 'Almond', desc: '' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <a
        href="/dashboard"
        className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Back
      </a>

      <div className="flex justify-center pt-20 pb-10 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Meal</h2>

          <div className="bg-green-100 p-4 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-green-800">Today Meal Suggestions</h3>
            <p className="text-sm text-gray-700 mt-2">
              This meal plan is designed to be nutrient-dense, low in calories, and high in protein and fiber to keep you
              full and energized while promoting weight loss.
            </p>
            <p className="mt-1 font-medium text-gray-800">Total Calories: 1500 kcal</p>
          </div>

          {/* Meal Cards */}
          <div className="space-y-4">
            {Object.entries(mealPlan).map(([mealType, items]) => (
              <div key={mealType} className="grid grid-cols-5 gap-4 items-center">
                <div className="col-span-1 text-white font-bold text-sm bg-green-700 py-2 px-3 rounded text-center">
                  {mealType}
                </div>
                {items.map((item, index) => (
                  <div key={index} className="col-span-2 bg-green-100 rounded-xl p-3 shadow-sm">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-6">
            <h4 className="text-md font-bold text-black mb-2">Tips:</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li><span className="text-green-800 font-medium">Drink at least 2–3 liters of water</span> throughout the day!</li>
              <li><span className="text-green-800 font-medium">Avoid sugary drinks</span> and opt for herbal teas or infused water.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;