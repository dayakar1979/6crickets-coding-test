function canCoverSoftwareCamera(desiredDistances, desiredLightLevels, hardwareCameras) {
    // Unpack desired ranges
    const [minDesiredDistance, maxDesiredDistance] = desiredDistances;
    const [minDesiredLight, maxDesiredLight] = desiredLightLevels;
    
    // Initialize min and max coverage trackers for both dimensions
    let coveredDistanceMin = Infinity;
    let coveredDistanceMax = -Infinity;
    let coveredLightMin = Infinity;
    let coveredLightMax = -Infinity;
    
    // Iterate over all hardware cameras to find the total covered ranges
    for (const camera of hardwareCameras) {
        const [cameraDistances, cameraLightLevels] = camera;
        
        // Unpack camera ranges
        const [camMinDistance, camMaxDistance] = cameraDistances;
        const [camMinLight, camMaxLight] = cameraLightLevels;
        
        // Update the covered ranges
        coveredDistanceMin = Math.min(coveredDistanceMin, camMinDistance);
        coveredDistanceMax = Math.max(coveredDistanceMax, camMaxDistance);
        
        coveredLightMin = Math.min(coveredLightMin, camMinLight);
        coveredLightMax = Math.max(coveredLightMax, camMaxLight);
    }
    
    // Check if the combined ranges of all cameras cover the desired range
    const distanceCovered = coveredDistanceMin <= minDesiredDistance && 
                            coveredDistanceMax >= maxDesiredDistance;
    const lightCovered = coveredLightMin <= minDesiredLight && 
                         coveredLightMax >= maxDesiredLight;
    
    return distanceCovered && lightCovered;
}

// Example usage:
// Desired range for software camera
const desiredDistances = [1, 100];  // Distance in some units
const desiredLightLevels = [10, 500];  // Light level in arbitrary units

// List of hardware cameras with their supported ranges [(distances), (light levels)]
const hardwareCameras = [
    [[1, 50], [10, 200]],    // Camera 1 covers distance 1-50, light 10-200
    [[50, 100], [200, 500]]  // Camera 2 covers distance 50-100, light 200-500
];

// Check if the set of cameras covers the desired range
console.log(canCoverSoftwareCamera(desiredDistances, desiredLightLevels, hardwareCameras));  // Output: true
