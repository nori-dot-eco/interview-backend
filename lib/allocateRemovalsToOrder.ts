import csv from 'csvtojson';

// Write your types for the data loaded from the CSV file here.
type CarbonRemoval = {};

// Write your types for the data returned from the function here.
type AllocatedCarbonRemoval = {};

export const allocateRemovalsToOrder = async ({
  orderQuantity,
}: {
  orderQuantity: number;
}): Promise<AllocatedCarbonRemoval[]> => {
  // This code loads data from a local CSV file
  const csvData = (await csv().fromFile(
    process.cwd() + '/lib/removals.csv'
  )) as CarbonRemoval[];
  // START WRITING YOUR CODE HERE
  return [];
};
