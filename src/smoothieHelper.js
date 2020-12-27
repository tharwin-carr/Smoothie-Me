export const findSmoothie =(sampleRecipes=[], smoothieId) => 
    sampleRecipes.find(smoothie => {
        return smoothie.id === smoothieId
    })