import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const AddMeal = () => {
  const { type, category } = useParams();
  const [mealName, setMealName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const formattedType = type.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const formattedCategory = category.replace(/\b\w/g, (c) => c.toUpperCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you'd normally send this to a backend or store it
    console.log(`Added meal for ${formattedType} - ${formattedCategory}:`, {
      mealName,
      ingredients,
    });

    // Optional: Reset fields after submission
    setMealName('');
    setIngredients('');
  };

  return (
    <TrainerLayout pageTitle="Manage Client">
      <div className="max-w-md mx-auto mt-10">
        <div className="bg-[#B7E4C7] text-center py-3 rounded-t-xl text-lg font-bold mb-8">
          Add Meal
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              placeholder="Meal Name"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-600 py-1"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Ingredients</label>
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Ingredients"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-600 py-1"
              required
            />
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-[#95D5B2] hover:bg-[#74c69d] text-black font-semibold px-6 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </TrainerLayout>
  );
};

export default AddMeal;