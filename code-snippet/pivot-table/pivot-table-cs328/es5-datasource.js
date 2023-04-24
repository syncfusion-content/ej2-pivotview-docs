var pivotData = [
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 49, 'Amount': 83496, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 95, 'Amount': 161880, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 67, 'Amount': 114168, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 67, 'Amount': 114168, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 93, 'Amount': 139412, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 35, 'Amount': 52470, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 16, 'Amount': 27264, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 69, 'Amount': 117576, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 75, 'Amount': 127800, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 20, 'Amount': 29985, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 83, 'Amount': 124422, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 16, 'Amount': 23989, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 28, 'Amount': 41977, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 48, 'Amount': 71957, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 57, 'Amount': 85448, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 25, 'Amount': 37480, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 69, 'Amount': 103436, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 36, 'Amount': 53969, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 75, 'Amount': 119662.5, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 28, 'Amount': 41977, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 19, 'Amount': 28486, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 91, 'Amount': 145190.5, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 24, 'Amount': 38292, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 94, 'Amount': 149977, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 100, 'Amount': 159550, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 30, 'Amount': 47865, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 89, 'Amount': 141999.5, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 25, 'Amount': 39887.5, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 42, 'Amount': 67011, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 21, 'Amount': 33505.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 74, 'Amount': 126096, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 76, 'Amount': 121258, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 69, 'Amount': 110089.5, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 16, 'Amount': 23989, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 52, 'Amount': 82966, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 85, 'Amount': 144840, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 99, 'Amount': 148406, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 31, 'Amount': 49460.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 33, 'Amount': 52651.5, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 41, 'Amount': 61464, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 64, 'Amount': 102112, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 57, 'Amount': 97128, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 39, 'Amount': 66456, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 76, 'Amount': 129504, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 33, 'Amount': 56232, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 81, 'Amount': 138024, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 65, 'Amount': 110760, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 47, 'Amount': 70458, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 91, 'Amount': 155064, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 16, 'Amount': 27264, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 71, 'Amount': 120984, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 36, 'Amount': 61344, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 39, 'Amount': 58466, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 59, 'Amount': 100536, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 83, 'Amount': 124422, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 19, 'Amount': 28486, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 34, 'Amount': 50971, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 26, 'Amount': 38979, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 15, 'Amount': 22490, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 13, 'Amount': 20741.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 79, 'Amount': 118426, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 14, 'Amount': 20991, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 34, 'Amount': 50971, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 47, 'Amount': 74988.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 93, 'Amount': 148381.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 15, 'Amount': 23932.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 48, 'Amount': 76584, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 44, 'Amount': 70202, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 59, 'Amount': 94134.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 77, 'Amount': 131208, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 84, 'Amount': 143136, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 34, 'Amount': 54247, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 56, 'Amount': 95424, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 35, 'Amount': 55842.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 71, 'Amount': 113280.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 91, 'Amount': 155064, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 40, 'Amount': 68160, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 24, 'Amount': 40896, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 31, 'Amount': 46474, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 92, 'Amount': 156768, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 14, 'Amount': 23856, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 95, 'Amount': 161880, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 39, 'Amount': 66456, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 36, 'Amount': 53969, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 86, 'Amount': 128919, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 40, 'Amount': 59965, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 96, 'Amount': 163584, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 24, 'Amount': 35981, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 97, 'Amount': 145408, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 69, 'Amount': 103436, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 95, 'Amount': 142410, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 30, 'Amount': 44975, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 11, 'Amount': 16494, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 95, 'Amount': 142410, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 11, 'Amount': 16494, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 27, 'Amount': 40478, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 68, 'Amount': 101937, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 100, 'Amount': 149905, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 45, 'Amount': 67460, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 16, 'Amount': 23989, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 40, 'Amount': 59965, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 18, 'Amount': 26987, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 70, 'Amount': 104935, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 43, 'Amount': 73272, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 43, 'Amount': 73272, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 83, 'Amount': 124422, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 52, 'Amount': 88608, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 91, 'Amount': 155064, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 100, 'Amount': 149905, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 70, 'Amount': 104935, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 37, 'Amount': 63048, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 41, 'Amount': 69864, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 99, 'Amount': 148406, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 67, 'Amount': 114168, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 41, 'Amount': 65415.5, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 81, 'Amount': 121424, 'Country': 'United States', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 20, 'Amount': 29985, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 85, 'Amount': 144840, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 49, 'Amount': 83496, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 23, 'Amount': 39192, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 34, 'Amount': 54247, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 53, 'Amount': 90312, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 82, 'Amount': 130831, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 60, 'Amount': 95730, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 71, 'Amount': 113280.5, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 28, 'Amount': 47712, 'Country': 'United States', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 21, 'Amount': 33505.5, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 94, 'Amount': 149977, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 45, 'Amount': 71797.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 75, 'Amount': 119662.5, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 49, 'Amount': 78179.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 50, 'Amount': 79775, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
    { 'Sold': 56, 'Amount': 89348, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 40, 'Amount': 63820, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
    { 'Sold': 14, 'Amount': 22337, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 76, 'Amount': 121258, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
    { 'Sold': 75, 'Amount': 119662.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 11, 'Amount': 17550.5, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
    { 'Sold': 94, 'Amount': 149977, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 80, 'Amount': 127640, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 54, 'Amount': 86157, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 14, 'Amount': 22337, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q3' },
    { 'Sold': 17, 'Amount': 27123.5, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
    { 'Sold': 45, 'Amount': 71797.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    { 'Sold': 76, 'Amount': 121258, 'Country': 'United States', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' },
    { 'Sold': 45, 'Amount': 71797.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
    { 'Sold': 11, 'Amount': 17550.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q4' }];

    var csvdata = "Region,Country,Item Type,Sales Channel,Order Priority,Order Date,Order ID,Ship Date,Units Sold,Unit Price,Unit Cost,Total Revenue,Total Cost,Total Profit\r\nMiddle East and North Africa,Libya,Cosmetics,Offline,M,10/18/2014,686800706,10/31/2014,8446,437.20,263.33,3692591.20,2224085.18,1468506.02\r\nNorth America,Canada,Vegetables,Online,M,11/7/2011,185941302,12/8/2011,3018,154.06,90.93,464953.08,274426.74,190526.34\r\nMiddle East and North Africa,Libya,Baby Food,Offline,C,10/31/2016,246222341,12/9/2016,1517,255.28,159.42,387259.76,241840.14,145419.62\r\nAsia,Japan,Cereal,Offline,C,4/10/2010,161442649,5/12/2010,3322,205.70,117.11,683335.40,389039.42,294295.98\r\nSub-Saharan Africa,Chad,Fruits,Offline,H,8/16/2011,645713555,8/31/2011,9845,9.33,6.92,91853.85,68127.40,23726.45\r\nEurope,Armenia,Cereal,Online,H,11/24/2014,683458888,12/28/2014,9528,205.70,117.11,1959909.60,1115824.08,844085.52\r\nSub-Saharan Africa,Eritrea,Cereal,Online,H,3/4/2015,679414975,4/17/2015,2844,205.70,117.11,585010.80,333060.84,251949.96\r\nEurope,Montenegro,Clothes,Offline,M,5/17/2012,208630645,6/28/2012,7299,109.28,35.84,797634.72,261596.16,536038.56\r\nCentral America and the Caribbean,Jamaica,Vegetables,Online,H,1/29/2015,266467225,3/7/2015,2428,154.06,90.93,374057.68,220778.04,153279.64\r\nAustralia and Oceania,Fiji,Vegetables,Offline,H,12/24/2013,118598544,1/19/2014,4800,154.06,90.93,739488.00,436464.00,303024.00\r\nSub-Saharan Africa,Togo,Clothes,Online,M,12/29/2015,451010930,1/19/2016,3012,109.28,35.84,329151.36,107950.08,221201.28\r\nEurope,Montenegro,Snacks,Offline,M,2/27/2010,220003211,3/18/2010,2694,152.58,97.44,411050.52,262503.36,148547.16\r\nEurope,Greece,Household,Online,C,11/17/2016,702186715,12/22/2016,1508,668.27,502.54,1007751.16,757830.32,249920.84\r\nSub-Saharan Africa,Sudan,Cosmetics,Online,C,12/20/2015,544485270,1/5/2016,4146,437.20,263.33,1812631.20,1091766.18,720865.02\r\nAsia,Maldives,Fruits,Offline,L,1/8/2011,714135205,2/6/2011,7332,9.33,6.92,68407.56,50737.44,17670.12\r\nEurope,Montenegro,Clothes,Offline,H,6/28/2010,448685348,7/22/2010,4820,109.28,35.84,526729.60,172748.80,353980.80\r\nEurope,Estonia,Office Supplies,Online,H,4/25/2016,405997025,5/12/2016,2397,651.21,524.96,1560950.37,1258329.12,302621.25\r\nNorth America,Greenland,Beverages,Online,M,7/27/2012,414244067,8/7/2012,2880,47.45,31.79,136656.00,91555.20,45100.80\r\nSub-Saharan Africa,Cape Verde,Clothes,Online,C,9/8/2014,821912801,10/3/2014,1117,109.28,35.84,122065.76,40033.28,82032.48\r\nSub-Saharan Africa,Senegal,Household,Offline,L,8/27/2012,247802054,9/8/2012,8989,668.27,502.54,6007079.03,4517332.06,1489746.97\r\nAustralia and Oceania,Federated States of Micronesia,Snacks,Online,C,9/3/2012,531023156,10/15/2012,407,152.58,97.44,62100.06,39658.08,22441.98\r\nEurope,Bulgaria,Clothes,Online,L,8/27/2010,880999934,9/16/2010,6313,109.28,35.84,689884.64,226257.92,463626.72\r\nMiddle East and North Africa,Algeria,Personal Care,Online,H,2/20/2011,127468717,3/9/2011,9681,81.73,56.67,791228.13,548622.27,242605.86\r\nAsia,Mongolia,Clothes,Online,L,12/12/2015,770478332,1/24/2016,515,109.28,35.84,56279.20,18457.60,37821.60\r\nCentral America and the Caribbean,Grenada,Cereal,Online,H,10/28/2012,430390107,11/13/2012,852,205.70,117.11,175256.40,99777.72,75478.68\r\nCentral America and the Caribbean,Grenada,Beverages,Online,M,1/30/2017,397877871,3/20/2017,9759,47.45,31.79,463064.55,310238.61,152825.94\r\nSub-Saharan Africa,Senegal,Beverages,Offline,M,10/22/2014,683927953,11/4/2014,8334,47.45,31.79,395448.30,264937.86,130510.44\r\nNorth America,Greenland,Fruits,Offline,M,1/31/2012,469839179,2/22/2012,4709,9.33,6.92,43934.97,32586.28,11348.69\r\nSub-Saharan Africa,Chad,Meat,Offline,H,1/20/2016,357222878,3/9/2016,9043,421.89,364.69,3815151.27,3297891.67,517259.60\r\nSub-Saharan Africa,Mauritius ,Personal Care,Online,C,1/1/2016,118002879,1/7/2016,8529,81.73,56.67,697075.17,483338.43,213736.74\r\nMiddle East and North Africa,Morocco,Beverages,Offline,C,6/1/2017,944415509,6/23/2017,2391,47.45,31.79,113452.95,76009.89,37443.06\r\nCentral America and the Caribbean,Honduras,Office Supplies,Online,H,6/30/2015,499009597,7/9/2015,6884,651.21,524.96,4482929.64,3613824.64,869105.00\r\nSub-Saharan Africa,Benin,Fruits,Online,L,1/28/2014,564646470,3/16/2014,293,9.33,6.92,2733.69,2027.56,706.13\r\nEurope,Greece,Baby Food,Offline,M,4/8/2014,294499957,4/8/2014,7937,255.28,159.42,2026157.36,1265316.54,760840.82\r\nCentral America and the Caribbean,Jamaica,Beverages,Offline,L,9/4/2010,262056386,10/24/2010,7163,47.45,31.79,339884.35,227711.77,112172.58\r\nSub-Saharan Africa,Equatorial Guinea,Office Supplies,Online,M,5/2/2010,211114585,5/14/2010,2352,651.21,524.96,1531645.92,1234705.92,296940.00\r\nSub-Saharan Africa,Swaziland,Office Supplies,Offline,H,10/3/2013,405785882,10/22/2013,9915,651.21,524.96,6456747.15,5204978.40,1251768.75\r\nCentral America and the Caribbean,Trinidad and Tobago,Vegetables,Offline,M,3/6/2011,280494105,4/14/2011,3294,154.06,90.93,507473.64,299523.42,207950.22\r\nEurope,Sweden,Baby Food,Online,L,8/7/2016,689975583,8/12/2016,7963,255.28,159.42,2032794.64,1269461.46,763333.18\r\nEurope,Belarus,Office Supplies,Online,L,1/11/2011,759279143,2/18/2011,6426,651.21,524.96,4184675.46,3373392.96,811282.50\r\nSub-Saharan Africa,Guinea-Bissau,Office Supplies,Offline,C,5/21/2014,133766114,6/12/2014,3221,651.21,524.96,2097547.41,1690896.16,406651.25\r\nAsia,Mongolia,Beverages,Online,M,8/3/2013,329110324,9/2/2013,9913,47.45,31.79,470371.85,315134.27,155237.58\r\nMiddle East and North Africa,Turkey,Meat,Online,L,10/5/2011,681298100,11/20/2011,103,421.89,364.69,43454.67,37563.07,5891.60\r\nSub-Saharan Africa,Central African Republic,Snacks,Offline,L,11/15/2016,596628272,12/30/2016,4419,152.58,97.44,674251.02,430587.36,243663.66\r\nSub-Saharan Africa,Equatorial Guinea,Office Supplies,Offline,L,4/3/2015,901712167,4/17/2015,5523,651.21,524.96,3596632.83,2899354.08,697278.75\r\nAsia,Laos,Beverages,Online,M,3/22/2013,693473613,4/21/2013,3107,47.45,31.79,147427.15,98771.53,48655.62\r\nEurope,Armenia,Meat,Online,C,8/2/2010,489148938,9/1/2010,8896,421.89,364.69,3753133.44,3244282.24,508851.20\r\nEurope,Greece,Household,Online,L,1/5/2012,876286971,2/15/2012,1643,668.27,502.54,1097967.61,825673.22,272294.39\r\nMiddle East and North Africa,Israel,Personal Care,Offline,H,8/26/2015,262749040,8/30/2015,2135,81.73,56.67,174493.55,120990.45,53503.10\r\nAsia,Bhutan,Meat,Online,H,12/9/2016,726708972,1/26/2017,8189,421.89,364.69,3454857.21,2986446.41,468410.80\r\nAustralia and Oceania,Vanuatu,Vegetables,Online,L,5/17/2012,366653096,5/31/2012,9654,154.06,90.93,1487295.24,877838.22,609457.02\r\nSub-Saharan Africa,Burundi,Vegetables,Online,M,11/17/2010,951380240,12/20/2010,3410,154.06,90.93,525344.60,310071.30,215273.30\r\nEurope,Ukraine,Cosmetics,Online,M,11/13/2014,270001733,1/1/2015,8368,437.20,263.33,3658489.60,2203545.44,1454944.16\r\nEurope,Croatia,Beverages,Online,C,6/16/2016,681941401,7/28/2016,470,47.45,31.79,22301.50,14941.30,7360.20\r\nSub-Saharan Africa,Madagascar,Fruits,Online,L,5/31/2016,566935575,6/7/2016,7690,9.33,6.92,71747.70,53214.80,18532.90\r\nAsia,Malaysia,Snacks,Offline,M,10/6/2012,175033080,11/5/2012,5033,152.58,97.44,767935.14,490415.52,277519.62\r\nAsia,Uzbekistan,Office Supplies,Offline,L,3/10/2012,276595246,3/15/2012,9535,651.21,524.96,6209287.35,5005493.60,1203793.75\r\nEurope,Italy,Office Supplies,Online,M,1/26/2011,812295901,2/13/2011,5263,651.21,524.96,3427318.23,2762864.48,664453.75\r\nAsia,Nepal,Vegetables,Offline,C,6/2/2014,443121373,6/19/2014,8316,154.06,90.93,1281162.96,756173.88,524989.08\r\nAustralia and Oceania,Fiji,Personal Care,Offline,H,12/17/2016,600370490,1/25/2017,1824,81.73,56.67,149075.52,103366.08,45709.44\r\nEurope,Portugal,Office Supplies,Online,L,6/27/2014,535654580,7/29/2014,949,651.21,524.96,617998.29,498187.04,119811.25\r\nCentral America and the Caribbean,Panama,Cosmetics,Offline,H,3/17/2015,470897471,4/22/2015,7881,437.20,263.33,3445573.20,2075303.73,1370269.47\r\nEurope,Belarus,Beverages,Offline,L,4/3/2013,248335492,4/4/2013,6846,47.45,31.79,324842.70,217634.34,107208.36\r\nSub-Saharan Africa,Botswana,Clothes,Offline,C,3/8/2015,680517470,3/25/2015,9097,109.28,35.84,994120.16,326036.48,668083.68\r\nSub-Saharan Africa,Tanzania,Personal Care,Online,M,6/21/2013,400304734,7/29/2013,7921,81.73,56.67,647383.33,448883.07,198500.26\r\nEurope,Romania,Office Supplies,Offline,C,1/6/2013,810871112,1/8/2013,3636,651.21,524.96,2367799.56,1908754.56,459045.00\r\nSub-Saharan Africa,Mali,Cereal,Online,L,3/17/2012,235702931,4/3/2012,8590,205.70,117.11,1766963.00,1005974.90,760988.10\r\nSub-Saharan Africa,Central African Republic,Office Supplies,Offline,C,4/18/2014,668599021,5/12/2014,2163,651.21,524.96,1408567.23,1135488.48,273078.75\r\nSub-Saharan Africa,Niger,Baby Food,Online,M,1/3/2016,123670709,2/1/2016,5766,255.28,159.42,1471944.48,919215.72,552728.76\r\nEurope,Austria,Office Supplies,Online,L,5/12/2011,285341823,6/8/2011,7841,651.21,524.96,5106137.61,4116211.36,989926.25\r\nAsia,India,Fruits,Online,H,7/29/2010,658348691,8/22/2010,8862,9.33,6.92,82682.46,61325.04,21357.42\r\nEurope,Luxembourg,Baby Food,Offline,L,8/2/2013,817740142,8/19/2013,6335,255.28,159.42,1617198.80,1009925.70,607273.10\r\nSub-Saharan Africa,Cape Verde,Beverages,Offline,H,10/23/2013,858877503,11/6/2013,9794,47.45,31.79,464725.30,311351.26,153374.04\r\nEurope,Sweden,Vegetables,Offline,M,2/5/2017,947434604,2/19/2017,5808,154.06,90.93,894780.48,528121.44,366659.04\r\nEurope,Iceland,Meat,Offline,H,3/20/2015,869397771,4/17/2015,2975,421.89,364.69,1255122.75,1084952.75,170170.00\r\nMiddle East and North Africa,Qatar,Personal Care,Offline,L,5/6/2012,481065833,5/8/2012,6925,81.73,56.67,565980.25,392439.75,173540.50\r\nSub-Saharan Africa,South Sudan,Meat,Online,C,9/30/2013,159050118,10/1/2013,5319,421.89,364.69,2244032.91,1939786.11,304246.80\r\nEurope,United Kingdom,Office Supplies,Online,M,5/20/2014,350274455,6/14/2014,2850,651.21,524.96,1855948.50,1496136.00,359812.50\r\nMiddle East and North Africa,Tunisia ,Cereal,Online,L,4/9/2010,221975171,5/17/2010,6241,205.70,117.11,1283773.70,730883.51,552890.19\r\nNorth America,United States of America,Office Supplies,Online,C,6/9/2017,811701095,7/19/2017,9247,651.21,524.96,6021738.87,4854305.12,1167433.75\r\nSub-Saharan Africa,Liberia,Cereal,Online,L,2/8/2015,977313554,3/29/2015,7653,205.70,117.11,1574222.10,896242.83,677979.27\r\nSub-Saharan Africa,Eritrea,Snacks,Offline,L,1/25/2010,546986377,2/10/2010,4279,152.58,97.44,652889.82,416945.76,235944.06\r\nAsia,South Korea,Fruits,Offline,L,3/7/2010,769205892,3/17/2010,3972,9.33,6.92,37058.76,27486.24,9572.52\r\nSub-Saharan Africa,Kenya,Clothes,Offline,M,1/3/2013,262770926,2/8/2013,8611,109.28,35.84,941010.08,308618.24,632391.84\r\nSub-Saharan Africa,Rwanda,Snacks,Online,M,3/6/2017,866792809,3/18/2017,2109,152.58,97.44,321791.22,205500.96,116290.26\r\nCentral America and the Caribbean,Cuba,Beverages,Offline,C,1/9/2011,890695369,2/23/2011,5408,47.45,31.79,256609.60,171920.32,84689.28\r\nMiddle East and North Africa,Libya,Cereal,Offline,M,3/27/2014,964214932,3/31/2014,1480,205.70,117.11,304436.00,173322.80,131113.20\r\nEurope,Czech Republic,Snacks,Online,C,6/28/2013,887400329,8/17/2013,332,152.58,97.44,50656.56,32350.08,18306.48\r\nEurope,Montenegro,Beverages,Offline,M,9/4/2011,980612885,9/4/2011,3999,47.45,31.79,189752.55,127128.21,62624.34\r\nEurope,Montenegro,Clothes,Offline,M,7/14/2016,734526431,8/2/2016,1549,109.28,35.84,169274.72,55516.16,113758.56\r\nAsia,Philippines,Baby Food,Online,L,2/23/2014,160127294,3/23/2014,4079,255.28,159.42,1041287.12,650274.18,391012.94\r\nCentral America and the Caribbean,El Salvador,Clothes,Offline,L,8/7/2010,238714301,9/13/2010,9721,109.28,35.84,1062310.88,348400.64,713910.24\r\nAustralia and Oceania,Tonga,Household,Online,M,1/14/2013,671898782,2/6/2013,8635,668.27,502.54,5770511.45,4339432.90,1431078.55\r\nSub-Saharan Africa,Democratic Republic of the Congo,Personal Care,Offline,H,9/30/2010,331604564,11/17/2010,8014,81.73,56.67,654984.22,454153.38,200830.84\r\nMiddle East and North Africa,Afghanistan,Cereal,Online,M,10/13/2016,410067975,11/20/2016,7081,205.70,117.11,1456561.70,829255.91,627305.79\r\nAustralia and Oceania,Tuvalu,Snacks,Offline,L,3/16/2011,369837844,3/23/2011,2091,152.58,97.44,319044.78,203747.04,115297.74\r\nSub-Saharan Africa,Sudan,Fruits,Online,L,12/26/2012,193775498,1/31/2013,1331,9.33,6.92,12418.23,9210.52,3207.71\r\nSub-Saharan Africa,Niger,Clothes,Online,M,9/2/2015,835054767,10/9/2015,117,109.28,35.84,12785.76,4193.28,8592.48\r\nSub-Saharan Africa,Gabon,Household,Offline,C,11/11/2013,167161977,12/24/2013,5798,668.27,502.54,3874629.46,2913726.92,960902.54\r\nAustralia and Oceania,East Timor,Vegetables,Offline,C,8/4/2014,633895957,8/22/2014,2755,154.06,90.93,424435.30,250512.15,173923.15\r\nNorth America,United States of America,Clothes,Offline,C,10/21/2010,699368035,12/7/2010,7398,109.28,35.84,808453.44,265144.32,543309.12\r\nMiddle East and North Africa,Jordan,Vegetables,Offline,L,6/13/2015,698002040,7/29/2015,3170,154.06,90.93,488370.20,288248.10,200122.10\r\nEurope,Cyprus,Snacks,Offline,H,3/29/2012,584534299,5/18/2012,5544,152.58,97.44,845903.52,540207.36,305696.16\r\nSub-Saharan Africa,Malawi,Vegetables,Online,L,6/22/2012,384013640,7/19/2012,7025,154.06,90.93,1082271.50,638783.25,443488.25\r\nEurope,Iceland,Personal Care,Online,M,5/10/2013,641801393,5/24/2013,2149,81.73,56.67,175637.77,121783.83,53853.94\r\nMiddle East and North Africa,Israel,Personal Care,Online,M,12/10/2016,173571383,1/11/2017,2484,81.73,56.67,203017.32,140768.28,62249.04\r\nMiddle East and North Africa,United Arab Emirates,Snacks,Offline,H,3/20/2011,115309941,4/6/2011,1629,152.58,97.44,248552.82,158729.76,89823.06\r\nAsia,China,Cosmetics,Offline,L,9/22/2011,773315894,11/4/2011,213,437.20,263.33,93123.60,56089.29,37034.31\r\nSub-Saharan Africa,Kenya,Beverages,Online,M,5/11/2012,274200570,6/26/2012,897,47.45,31.79,42562.65,28515.63,14047.02\r\nMiddle East and North Africa,Somalia,Clothes,Offline,M,11/15/2011,414887797,11/17/2011,3374,109.28,35.84,368710.72,120924.16,247786.56\r\nAustralia and Oceania,Tonga,Beverages,Offline,L,1/27/2010,812613904,1/29/2010,9367,47.45,31.79,444464.15,297776.93,146687.22\r\nAsia,Bangladesh,Baby Food,Online,H,8/17/2011,254927718,9/7/2011,7632,255.28,159.42,1948296.96,1216693.44,731603.52\r\nMiddle East and North Africa,Egypt,Beverages,Offline,M,9/6/2014,749690568,10/26/2014,8954,47.45,31.79,424867.30,284647.66,140219.64\r\nSub-Saharan Africa,Eritrea,Cereal,Offline,C,9/3/2014,775076282,9/19/2014,1150,205.70,117.11,236555.00,134676.50,101878.50\r\nSub-Saharan Africa,Swaziland,Office Supplies,Online,H,9/5/2015,229571187,9/18/2015,4071,651.21,524.96,2651075.91,2137112.16,513963.75\r\nAsia,Vietnam,Baby Food,Online,C,6/20/2011,881974112,7/11/2011,4594,255.28,159.42,1172756.32,732375.48,440380.84\r\nAustralia and Oceania,Marshall Islands,Snacks,Online,L,1/12/2012,521396386,2/14/2012,1632,152.58,97.44,249010.56,159022.08,89988.48\r\nAsia,Taiwan,Household,Online,C,1/23/2017,607261836,2/22/2017,1127,668.27,502.54,753140.29,566362.58,186777.71\r\nEurope,Ireland,Vegetables,Online,M,3/4/2012,419306790,3/12/2012,1052,154.06,90.93,162071.12,95658.36,66412.76\r\nSub-Saharan Africa,Rwanda,Meat,Offline,H,7/18/2010,207580077,7/18/2010,6413,421.89,364.69,2705580.57,2338756.97,366823.60\r\nEurope,Sweden,Snacks,Online,M,4/12/2011,742443025,4/15/2011,4245,152.58,97.44,647702.10,413632.80,234069.30\r\nSub-Saharan Africa,Gabon,Snacks,Offline,M,10/3/2010,164569461,10/5/2010,8615,152.58,97.44,1314476.70,839445.60,475031.10\r\nSub-Saharan Africa,South Africa,Baby Food,Online,L,12/29/2013,734945714,2/12/2014,5624,255.28,159.42,1435694.72,896578.08,539116.64\r\nEurope,United Kingdom,Clothes,Offline,C,9/19/2015,284870612,10/7/2015,8399,109.28,35.84,917842.72,301020.16,616822.56\r\nEurope,Albania,Fruits,Offline,M,9/17/2011,765955483,10/7/2011,2104,9.33,6.92,19630.32,14559.68,5070.64\r\nAsia,Malaysia,Snacks,Offline,H,3/11/2010,600124156,4/21/2010,8929,152.58,97.44,1362386.82,870041.76,492345.06\r\nSub-Saharan Africa,Ghana,Household,Offline,L,11/10/2012,529612958,12/11/2012,3098,668.27,502.54,2070300.46,1556868.92,513431.54\r\nCentral America and the Caribbean,Cuba,Clothes,Offline,H,2/16/2011,466970717,3/18/2011,5867,109.28,35.84,641145.76,210273.28,430872.48\r\nCentral America and the Caribbean,Saint Lucia,Cosmetics,Online,C,8/13/2012,845058763,9/22/2012,522,437.20,263.33,228218.40,137458.26,90760.14\r\nEurope,Romania,Snacks,Offline,L,8/28/2014,367050921,8/31/2014,7379,152.58,97.44,1125887.82,719009.76,406878.06\r\nEurope,Portugal,Office Supplies,Online,L,8/19/2015,956433522,9/12/2015,8788,651.21,524.96,5722833.48,4613348.48,1109485.00\r\nEurope,Macedonia,Beverages,Online,C,3/20/2011,107005393,5/4/2011,4129,47.45,31.79,195921.05,131260.91,64660.14\r\nAsia,China,Beverages,Offline,C,4/16/2013,332877862,5/7/2013,4811,47.45,31.79,228281.95,152941.69,75340.26\r\nEurope,Germany,Baby Food,Online,L,11/13/2015,618474757,12/31/2015,9279,255.28,159.42,2368743.12,1479258.18,889484.94\r\nEurope,Ireland,Household,Online,M,1/10/2014,468532407,2/11/2014,8006,668.27,502.54,5350169.62,4023335.24,1326834.38\r\nEurope,Poland,Office Supplies,Offline,M,4/9/2015,358099639,4/29/2015,8496,651.21,524.96,5532680.16,4460060.16,1072620.00\r\nSub-Saharan Africa,Namibia,Household,Online,H,1/7/2013,382537782,1/27/2013,285,668.27,502.54,190456.95,143223.90,47233.05\r\nAsia,Uzbekistan,Personal Care,Offline,H,2/12/2013,707520663,3/15/2013,9942,81.73,56.67,812559.66,563413.14,249146.52\r\nSub-Saharan Africa,Zimbabwe,Meat,Online,M,11/28/2014,219034612,12/10/2014,6064,421.89,364.69,2558340.96,2211480.16,346860.80\r\nAsia,Mongolia,Meat,Offline,M,1/3/2015,573378455,1/17/2015,4281,421.89,364.69,1806111.09,1561237.89,244873.20\r\nEurope,Norway,Personal Care,Online,H,2/3/2011,347163522,3/22/2011,2256,81.73,56.67,184382.88,127847.52,56535.36\r\nMiddle East and North Africa,Oman,Snacks,Offline,M,4/9/2013,887313640,4/21/2013,4679,152.58,97.44,713921.82,455921.76,258000.06\r\nEurope,Serbia,Cosmetics,Online,H,7/26/2017,461065137,8/19/2017,8275,437.20,263.33,3617830.00,2179055.75,1438774.25\r\nSub-Saharan Africa,Democratic Republic of the Congo,Fruits,Offline,H,4/15/2017,105966842,5/19/2017,6798,9.33,6.92,63425.34,47042.16,16383.18\r\nEurope,Bulgaria,Baby Food,Online,M,5/16/2014,479880082,5/23/2014,6035,255.28,159.42,1540614.80,962099.70,578515.10\r\nAsia,Brunei,Baby Food,Online,H,8/12/2015,510978686,9/30/2015,8803,255.28,159.42,2247229.84,1403374.26,843855.58\r\nEurope,Serbia,Snacks,Offline,C,9/20/2013,547748982,10/14/2013,9951,152.58,97.44,1518323.58,969625.44,548698.14\r\nSub-Saharan Africa,Ghana,Cereal,Offline,M,10/31/2013,108989799,12/9/2013,1358,205.70,117.11,279340.60,159035.38,120305.22\r\nSub-Saharan Africa,Malawi,Cereal,Offline,M,7/30/2014,133812463,8/9/2014,6936,205.70,117.11,1426735.20,812274.96,614460.24\r\nSub-Saharan Africa,Zimbabwe,Fruits,Offline,L,11/12/2011,731640803,12/30/2011,7627,9.33,6.92,71159.91,52778.84,18381.07\r\nEurope,Cyprus,Snacks,Offline,C,3/25/2010,732211148,4/14/2010,6405,152.58,97.44,977274.90,624103.20,353171.70\r\nCentral America and the Caribbean,Nicaragua,Cereal,Online,M,7/4/2011,835572326,8/8/2011,3274,205.70,117.11,673461.80,383418.14,290043.66\r\nEurope,Estonia,Baby Food,Offline,C,1/1/2011,462085664,1/15/2011,271,255.28,159.42,69180.88,43202.82,25978.06\r\nEurope,Estonia,Clothes,Online,C,6/16/2016,902424991,7/4/2016,6463,109.28,35.84,706276.64,231633.92,474642.72\r\nEurope,Lithuania,Fruits,Offline,H,12/17/2013,367576634,1/5/2014,2949,9.33,6.92,27514.17,20407.08,7107.09\r\nSub-Saharan Africa,Republic of the Congo,Meat,Offline,H,3/1/2017,738839423,3/31/2017,7859,421.89,364.69,3315633.51,2866098.71,449534.80\r\nEurope,Czech Republic,Baby Food,Online,C,7/2/2010,817824685,7/27/2010,1353,255.28,159.42,345393.84,215695.26,129698.58\r\nSub-Saharan Africa,Cameroon,Snacks,Online,C,7/16/2013,376456248,8/1/2013,624,152.58,97.44,95209.92,60802.56,34407.36\r\nAsia,Vietnam,Office Supplies,Online,H,8/16/2016,606970441,9/16/2016,4897,651.21,524.96,3188975.37,2570729.12,618246.25\r\nEurope,Moldova ,Meat,Offline,L,12/16/2014,971916091,1/19/2015,424,421.89,364.69,178881.36,154628.56,24252.80\r\nMiddle East and North Africa,Bahrain,Office Supplies,Offline,L,5/14/2012,554154527,5/15/2012,5494,651.21,524.96,3577747.74,2884130.24,693617.50\r\nEurope,Hungary,Household,Online,L,7/18/2017,306859576,7/19/2017,5423,668.27,502.54,3624028.21,2725274.42,898753.79\r\nAustralia and Oceania,Marshall Islands,Personal Care,Offline,L,7/9/2017,803517568,7/21/2017,7559,81.73,56.67,617797.07,428368.53,189428.54\r\nMiddle East and North Africa,Iraq,Office Supplies,Online,C,9/30/2011,887927329,10/2/2011,6283,651.21,524.96,4091552.43,3298323.68,793228.75\r\nEurope,Albania,Vegetables,Online,H,11/24/2015,824200189,11/26/2015,8006,154.06,90.93,1233404.36,727985.58,505418.78\r\nSub-Saharan Africa,Lesotho,Office Supplies,Online,H,8/14/2012,946759974,9/14/2012,6170,651.21,524.96,4017965.70,3239003.20,778962.50\r\nMiddle East and North Africa,Lebanon,Clothes,Offline,H,12/6/2015,310343015,12/28/2015,6249,109.28,35.84,682890.72,223964.16,458926.56\r\nEurope,Hungary,Vegetables,Online,C,5/25/2014,739998137,7/9/2014,748,154.06,90.93,115236.88,68015.64,47221.24\r\nAsia,Japan,Beverages,Online,H,10/18/2012,981086671,11/21/2012,4203,47.45,31.79,199432.35,133613.37,65818.98\r\nEurope,Georgia,Office Supplies,Offline,L,3/13/2013,749282443,3/25/2013,8180,651.21,524.96,5326897.80,4294172.80,1032725.00\r\nEurope,Estonia,Office Supplies,Online,C,2/23/2011,280571782,3/11/2011,6280,651.21,524.96,4089598.80,3296748.80,792850.00\r\nEurope,Luxembourg,Household,Online,C,8/15/2014,781253516,9/1/2014,9131,668.27,502.54,6101973.37,4588692.74,1513280.63\r\nSub-Saharan Africa,Swaziland,Personal Care,Online,H,7/6/2017,377938973,7/11/2017,9396,81.73,56.67,767935.08,532471.32,235463.76\r\nEurope,Romania,Clothes,Offline,C,12/31/2010,867551982,1/3/2011,6765,109.28,35.84,739279.20,242457.60,496821.60\r\nSub-Saharan Africa,Ethiopia,Personal Care,Offline,C,1/13/2010,967328870,1/15/2010,2964,81.73,56.67,242247.72,167969.88,74277.84\r\nSub-Saharan Africa,Chad,Office Supplies,Offline,C,9/17/2011,364818465,10/16/2011,6746,651.21,524.96,4393062.66,3541380.16,851682.50\r\nMiddle East and North Africa,Morocco,Office Supplies,Online,C,3/8/2014,167882096,3/31/2014,8898,651.21,524.96,5794466.58,4671094.08,1123372.50\r\nNorth America,Mexico,Clothes,Online,H,11/18/2012,654693591,12/1/2012,7237,109.28,35.84,790859.36,259374.08,531485.28\r\nSub-Saharan Africa,Nigeria,Personal Care,Offline,H,11/18/2011,823739278,12/29/2011,1612,81.73,56.67,131748.76,91352.04,40396.72\r\nCentral America and the Caribbean,Trinidad and Tobago,Beverages,Offline,L,7/12/2012,643817985,8/19/2012,8904,47.45,31.79,422494.80,283058.16,139436.64\r\nEurope,Moldova ,Personal Care,Offline,H,3/30/2017,604041039,5/15/2017,8022,81.73,56.67,655638.06,454606.74,201031.32\r\nAustralia and Oceania,Solomon Islands,Personal Care,Online,H,7/26/2010,363832271,9/12/2010,4909,81.73,56.67,401212.57,278193.03,123019.54\r\nAsia,India,Personal Care,Online,L,12/24/2015,102928006,1/31/2016,7539,81.73,56.67,616162.47,427235.13,188927.34\r\nSub-Saharan Africa,Burkina Faso,Office Supplies,Offline,M,5/15/2016,971377074,5/15/2016,917,651.21,524.96,597159.57,481388.32,115771.25\r\nAustralia and Oceania,Kiribati,Meat,Online,L,11/3/2010,139540803,12/4/2010,2079,421.89,364.69,877109.31,758190.51,118918.80\r\nMiddle East and North Africa,Israel,Meat,Offline,M,12/1/2010,248093020,12/16/2010,5093,421.89,364.69,2148685.77,1857366.17,291319.60\r\nSub-Saharan Africa,Comoros,Snacks,Offline,L,1/16/2014,858020055,1/17/2014,6056,152.58,97.44,924024.48,590096.64,333927.84\r\nMiddle East and North Africa,Iran,Baby Food,Offline,H,12/11/2014,700620734,1/5/2015,8099,255.28,159.42,2067512.72,1291142.58,776370.14\r\nAsia,Vietnam,Cosmetics,Offline,L,12/24/2016,827506387,1/30/2017,6384,437.20,263.33,2791084.80,1681098.72,1109986.08\r\nCentral America and the Caribbean,Belize,Household,Online,M,3/21/2013,560600841,4/14/2013,3101,668.27,502.54,2072305.27,1558376.54,513928.73\r\nEurope,Belarus,Personal Care,Offline,H,12/8/2012,642140424,1/16/2013,2476,81.73,56.67,202363.48,140314.92,62048.56\r\nNorth America,United States of America,Baby Food,Offline,C,2/13/2015,984673964,3/5/2015,5763,255.28,159.42,1471178.64,918737.46,552441.18\r\nEurope,Poland,Beverages,Online,L,3/28/2012,221062791,4/18/2012,6247,47.45,31.79,296420.15,198592.13,97828.02\r\nNorth America,Canada,Vegetables,Offline,L,10/7/2016,654480731,11/8/2016,4247,154.06,90.93,654292.82,386179.71,268113.11\r\nMiddle East and North Africa,Israel,Beverages,Offline,C,12/15/2011,608414113,12/23/2011,2111,47.45,31.79,100166.95,67108.69,33058.26\r\nMiddle East and North Africa,Lebanon,Household,Online,L,3/8/2016,276661765,4/20/2016,9219,668.27,502.54,6160781.13,4632916.26,1527864.87\r\nEurope,Andorra,Baby Food,Online,L,1/18/2011,373335015,2/28/2011,6982,255.28,159.42,1782364.96,1113070.44,669294.52\r\nEurope,Slovakia,Clothes,Online,L,4/11/2013,782857692,5/28/2013,3843,109.28,35.84,419963.04,137733.12,282229.92\r\nSub-Saharan Africa,Liberia,Fruits,Online,H,5/18/2010,109966123,6/5/2010,274,9.33,6.92,2556.42,1896.08,660.34\r\nCentral America and the Caribbean,Antigua and Barbuda ,Cereal,Offline,M,6/5/2017,629709136,6/6/2017,3782,205.70,117.11,777957.40,442910.02,335047.38\r\nAsia,China,Personal Care,Online,L,9/11/2012,637448060,9/15/2012,3901,81.73,56.67,318828.73,221069.67,97759.06\r\nSub-Saharan Africa,Niger,Baby Food,Online,H,3/8/2017,298856723,4/3/2017,7200,255.28,159.42,1838016.00,1147824.00,690192.00\r\nEurope,United Kingdom,Household,Offline,L,1/28/2015,299921452,2/23/2015,2278,668.27,502.54,1522319.06,1144786.12,377532.94\r\nAsia,Bangladesh,Personal Care,Offline,M,7/26/2010,496941077,7/29/2010,4763,81.73,56.67,389279.99,269919.21,119360.78\r\nAsia,Myanmar,Snacks,Online,L,6/24/2016,366526925,7/14/2016,2317,152.58,97.44,353527.86,225768.48,127759.38\r\nAustralia and Oceania,Tonga,Meat,Offline,M,8/18/2012,355602824,9/15/2012,9633,421.89,364.69,4064066.37,3513058.77,551007.60\r\nSub-Saharan Africa,Guinea-Bissau,Vegetables,Online,C,3/11/2010,531405103,4/19/2010,3434,154.06,90.93,529042.04,312253.62,216788.42\r\nAustralia and Oceania,Nauru,Vegetables,Offline,M,1/14/2010,131482589,1/20/2010,7475,154.06,90.93,1151598.50,679701.75,471896.75\r\nSub-Saharan Africa,Swaziland,Cereal,Online,L,2/10/2014,713696610,3/28/2014,7542,205.70,117.11,1551389.40,883243.62,668145.78\r\nEurope,Finland,Vegetables,Online,C,1/21/2014,306220996,1/30/2014,6452,154.06,90.93,993995.12,586680.36,407314.76\r\nAustralia and Oceania,Papua New Guinea,Household,Offline,L,2/28/2010,157542073,3/15/2010,9055,668.27,502.54,6051184.85,4550499.70,1500685.15\r\nSub-Saharan Africa,Mauritius ,Personal Care,Online,L,2/18/2015,686458671,3/8/2015,7230,81.73,56.67,590907.90,409724.10,181183.80\r\nSub-Saharan Africa,Mozambique,Office Supplies,Online,M,6/14/2012,132082116,7/22/2012,4888,651.21,524.96,3183114.48,2566004.48,617110.00\r\nEurope,Bulgaria,Clothes,Online,L,3/5/2013,403836238,4/3/2013,2972,109.28,35.84,324780.16,106516.48,218263.68\r\nEurope,Spain,Household,Online,C,4/10/2014,331457364,4/23/2014,4455,668.27,502.54,2977142.85,2238815.70,738327.15\r\nAustralia and Oceania,Vanuatu,Meat,Online,H,7/26/2017,614994323,9/12/2017,9341,421.89,364.69,3940874.49,3406569.29,534305.20\r\nEurope,Belgium,Fruits,Offline,L,10/19/2010,674808442,10/24/2010,9669,9.33,6.92,90211.77,66909.48,23302.29\r\nEurope,Belgium,Baby Food,Offline,L,11/8/2016,901573550,12/23/2016,4503,255.28,159.42,1149525.84,717868.26,431657.58\r\nSub-Saharan Africa,Guinea-Bissau,Clothes,Online,L,3/31/2014,406275975,5/10/2014,4944,109.28,35.84,540280.32,177192.96,363087.36\r\nSub-Saharan Africa,Togo,Vegetables,Online,C,8/18/2016,170214545,8/19/2016,9121,154.06,90.93,1405181.26,829372.53,575808.73\r\nSub-Saharan Africa,Cote d'Ivoire,Personal Care,Offline,C,1/3/2016,795000588,1/8/2016,7196,81.73,56.67,588129.08,407797.32,180331.76\r\nSub-Saharan Africa,Republic of the Congo,Fruits,Offline,C,10/21/2016,252557933,11/4/2016,6360,9.33,6.92,59338.80,44011.20,15327.60\r\nMiddle East and North Africa,Libya,Baby Food,Offline,M,12/10/2016,635122907,12/13/2016,5837,255.28,159.42,1490069.36,930534.54,559534.82\r\nAustralia and Oceania,East Timor,Vegetables,Online,C,8/12/2011,505244338,9/19/2011,1882,154.06,90.93,289940.92,171130.26,118810.66\r\nEurope,Switzerland,Clothes,Offline,H,3/23/2012,745783555,5/9/2012,2782,109.28,35.84,304016.96,99706.88,204310.08\r\nAustralia and Oceania,Palau,Snacks,Offline,M,4/27/2012,509914386,6/11/2012,3853,152.58,97.44,587890.74,375436.32,212454.42\r\nMiddle East and North Africa,Jordan,Household,Online,M,1/29/2014,371123158,2/9/2014,2445,668.27,502.54,1633920.15,1228710.30,405209.85\r\nEurope,Slovenia,Household,Online,H,12/13/2016,973208701,12/28/2016,2936,668.27,502.54,1962040.72,1475457.44,486583.28\r\nAsia,South Korea,Baby Food,Online,L,11/21/2013,780282342,12/27/2013,1739,255.28,159.42,443931.92,277231.38,166700.54\r\nEurope,Norway,Clothes,Online,H,4/7/2010,126767909,5/22/2010,2296,109.28,35.84,250906.88,82288.64,168618.24\r\nMiddle East and North Africa,Afghanistan,Baby Food,Online,M,7/8/2012,767401731,7/30/2012,80,255.28,159.42,20422.40,12753.60,7668.80\r\nAsia,Bangladesh,Personal Care,Online,L,10/15/2016,927232635,11/24/2016,7597,81.73,56.67,620902.81,430521.99,190380.82\r\nSub-Saharan Africa,Guinea,Meat,Offline,M,9/18/2012,251621949,10/20/2012,9381,421.89,364.69,3957750.09,3421156.89,536593.20\r\nCentral America and the Caribbean,Cuba,Office Supplies,Offline,H,7/2/2017,256243503,7/23/2017,7002,651.21,524.96,4559772.42,3675769.92,884002.50\r\nEurope,Russia,Cosmetics,Offline,C,7/21/2011,277083623,9/2/2011,4056,437.20,263.33,1773283.20,1068066.48,705216.72\r\nSub-Saharan Africa,Seychelles ,Vegetables,Offline,L,6/1/2010,620441138,6/22/2010,1175,154.06,90.93,181020.50,106842.75,74177.75\r\nAsia,South Korea,Office Supplies,Offline,M,7/26/2015,312927377,9/7/2015,1020,651.21,524.96,664234.20,535459.20,128775.00\r\nSub-Saharan Africa,Ghana,Baby Food,Offline,L,8/6/2010,251466166,9/8/2010,3282,255.28,159.42,837828.96,523216.44,314612.52\r\nCentral America and the Caribbean,Costa Rica,Office Supplies,Online,H,6/20/2010,953293836,7/22/2010,9685,651.21,524.96,6306968.85,5084237.60,1222731.25\r\nEurope,Romania,Cereal,Online,C,4/8/2012,305959212,4/23/2012,8985,205.70,117.11,1848214.50,1052233.35,795981.15\r\nEurope,Czech Republic,Cereal,Online,L,2/27/2014,317323625,3/24/2014,1967,205.70,117.11,404611.90,230355.37,174256.53\r\nEurope,Liechtenstein,Household,Offline,L,7/25/2011,365560901,9/1/2011,6449,668.27,502.54,4309673.23,3240880.46,1068792.77\r\nSub-Saharan Africa,Seychelles ,Baby Food,Online,M,2/18/2016,349157369,4/5/2016,2279,255.28,159.42,581783.12,363318.18,218464.94\r\nMiddle East and North Africa,Somalia,Baby Food,Online,L,1/24/2014,236911857,2/25/2014,6338,255.28,159.42,1617964.64,1010403.96,607560.68\r\nAustralia and Oceania,Solomon Islands,Personal Care,Offline,H,5/10/2015,517935693,6/16/2015,7536,81.73,56.67,615917.28,427065.12,188852.16\r\nSub-Saharan Africa,Uganda,Clothes,Offline,C,2/13/2012,851652705,3/27/2012,1816,109.28,35.84,198452.48,65085.44,133367.04\r\nSub-Saharan Africa,Equatorial Guinea,Cereal,Offline,M,9/7/2012,517799222,10/23/2012,7151,205.70,117.11,1470960.70,837453.61,633507.09\r\nCentral America and the Caribbean,Costa Rica,Office Supplies,Offline,C,2/4/2015,666424071,3/4/2015,8547,651.21,524.96,5565891.87,4486833.12,1079058.75\r\nEurope,Moldova ,Fruits,Offline,C,11/16/2010,267888581,12/22/2010,3039,9.33,6.92,28353.87,21029.88,7323.99\r\nSub-Saharan Africa,Burkina Faso,Vegetables,Online,L,7/20/2011,162866580,7/26/2011,4695,154.06,90.93,723311.70,426916.35,296395.35\r\nCentral America and the Caribbean,Guatemala,Beverages,Offline,H,7/26/2014,812344396,8/30/2014,9614,47.45,31.79,456184.30,305629.06,150555.24\r\nSub-Saharan Africa,Swaziland,Meat,Online,M,8/24/2014,947620856,9/3/2014,924,421.89,364.69,389826.36,336973.56,52852.80\r\nAsia,Maldives,Vegetables,Online,H,2/25/2015,720307290,3/28/2015,3789,154.06,90.93,583733.34,344533.77,239199.57\r\nAsia,Thailand,Household,Online,H,9/21/2016,352327525,10/27/2016,399,668.27,502.54,266639.73,200513.46,66126.27\r\nSub-Saharan Africa,Sudan,Household,Online,C,6/28/2013,585917890,7/23/2013,4979,668.27,502.54,3327316.33,2502146.66,825169.67\r\nCentral America and the Caribbean,Costa Rica,Meat,Offline,L,1/5/2012,433627212,2/13/2012,8783,421.89,364.69,3705459.87,3203072.27,502387.60\r\nEurope,Denmark,Beverages,Online,C,5/1/2012,328316819,5/30/2012,5098,47.45,31.79,241900.10,162065.42,79834.68\r\nSub-Saharan Africa,Angola,Cereal,Offline,C,10/13/2011,773160541,11/21/2011,4240,205.70,117.11,872168.00,496546.40,375621.60\r\nAustralia and Oceania,Papua New Guinea,Household,Online,M,4/27/2016,991644704,5/18/2016,8559,668.27,502.54,5719722.93,4301239.86,1418483.07\r\nAsia,North Korea,Meat,Online,M,1/19/2014,277568137,2/7/2014,7435,421.89,364.69,3136752.15,2711470.15,425282.00\r\nCentral America and the Caribbean,El Salvador,Fruits,Online,C,11/6/2016,245042169,12/15/2016,2278,9.33,6.92,21253.74,15763.76,5489.98\r\nSub-Saharan Africa,Burkina Faso,Household,Online,M,2/28/2011,778490626,3/24/2011,1531,668.27,502.54,1023121.37,769388.74,253732.63\r\nMiddle East and North Africa,Yemen,Baby Food,Online,C,10/11/2014,482649838,11/13/2014,5668,255.28,159.42,1446927.04,903592.56,543334.48\r\nSub-Saharan Africa,Republic of the Congo,Beverages,Online,L,6/25/2012,732568633,7/5/2012,2193,47.45,31.79,104057.85,69715.47,34342.38\r\nEurope,Andorra,Household,Online,M,11/6/2012,723608338,11/23/2012,642,668.27,502.54,429029.34,322630.68,106398.66\r\nCentral America and the Caribbean,Dominican Republic,Household,Offline,H,2/24/2014,621442782,4/14/2014,7584,668.27,502.54,5068159.68,3811263.36,1256896.32\r\nMiddle East and North Africa,Israel,Baby Food,Offline,M,9/19/2015,212058293,10/6/2015,1616,255.28,159.42,412532.48,257622.72,154909.76\r\nAustralia and Oceania,Solomon Islands,Snacks,Offline,L,3/4/2014,251753699,3/24/2014,8369,152.58,97.44,1276942.02,815475.36,461466.66\r\nSub-Saharan Africa,Liberia,Fruits,Online,M,10/8/2014,217140328,10/30/2014,5503,9.33,6.92,51342.99,38080.76,13262.23\r\nSub-Saharan Africa,Mali,Vegetables,Online,C,6/19/2012,555142009,7/10/2012,7712,154.06,90.93,1188110.72,701252.16,486858.56\r\nAsia,Uzbekistan,Clothes,Online,C,11/11/2010,432995069,12/13/2010,1718,109.28,35.84,187743.04,61573.12,126169.92\r\nMiddle East and North Africa,Tunisia ,Personal Care,Offline,H,11/1/2010,888248336,11/7/2010,1276,81.73,56.67,104287.48,72310.92,31976.56\r\nEurope,Vatican City,Vegetables,Online,C,4/28/2014,778763139,5/9/2014,2173,154.06,90.93,334772.38,197590.89,137181.49\r\nSub-Saharan Africa,Djibouti,Snacks,Offline,H,12/22/2012,832713305,2/9/2013,7227,152.58,97.44,1102695.66,704198.88,398496.78\r\nEurope,Ukraine,Household,Offline,M,8/25/2014,498585164,9/29/2014,1285,668.27,502.54,858726.95,645763.90,212963.05\r\nAustralia and Oceania,East Timor,Fruits,Offline,M,11/26/2016,195177543,12/23/2016,6227,9.33,6.92,58097.91,43090.84,15007.07\r\nSub-Saharan Africa,Uganda,Cereal,Online,C,10/20/2010,861601769,12/2/2010,5965,205.70,117.11,1227000.50,698561.15,528439.35\r\nSub-Saharan Africa,Guinea,Meat,Online,H,12/18/2014,807281672,1/26/2015,1441,421.89,364.69,607943.49,525518.29,82425.20\r\nSub-Saharan Africa,Equatorial Guinea,Clothes,Offline,H,3/20/2011,661953580,4/24/2011,5629,109.28,35.84,615137.12,201743.36,413393.76\r\nEurope,Malta,Cosmetics,Online,M,7/12/2016,225666320,8/21/2016,8534,437.20,263.33,3731064.80,2247258.22,1483806.58\r\nEurope,Cyprus,Household,Offline,L,1/26/2011,718781220,2/19/2011,2191,668.27,502.54,1464179.57,1101065.14,363114.43\r\nEurope,Czech Republic,Office Supplies,Online,L,2/24/2010,731972110,4/15/2010,5668,651.21,524.96,3691058.28,2975473.28,715585.00\r\nMiddle East and North Africa,Libya,Vegetables,Online,C,1/2/2015,276225316,2/9/2015,64,154.06,90.93,9859.84,5819.52,4040.32\r\nAsia,Vietnam,Office Supplies,Offline,C,7/26/2016,332839667,7/27/2016,3509,651.21,524.96,2285095.89,1842084.64,443011.25\r\nMiddle East and North Africa,Jordan,Vegetables,Online,C,6/1/2014,603426492,6/15/2014,6163,154.06,90.93,949471.78,560401.59,389070.19\r\nSub-Saharan Africa,Mali,Beverages,Offline,H,12/21/2012,859909617,1/29/2013,5220,47.45,31.79,247689.00,165943.80,81745.20\r\nEurope,Czech Republic,Household,Online,L,2/27/2010,494525372,3/2/2010,9902,668.27,502.54,6617209.54,4976151.08,1641058.46\r\nEurope,Slovakia,Vegetables,Online,M,4/24/2016,769822585,5/15/2016,6465,154.06,90.93,995997.90,587862.45,408135.45\r\nSub-Saharan Africa,Zimbabwe,Vegetables,Offline,C,7/22/2012,768662583,8/10/2012,3195,154.06,90.93,492221.70,290521.35,201700.35\r\nCentral America and the Caribbean,Honduras,Cereal,Online,M,2/22/2015,544219195,3/9/2015,5409,205.70,117.11,1112631.30,633447.99,479183.31\r\nEurope,Switzerland,Beverages,Offline,L,2/10/2011,669978749,3/20/2011,455,47.45,31.79,21589.75,14464.45,7125.30\r\nSub-Saharan Africa,South Africa,Cosmetics,Offline,L,1/21/2015,889740073,1/26/2015,2715,437.20,263.33,1186998.00,714940.95,472057.05\r\nSub-Saharan Africa,Uganda,Beverages,Online,M,5/10/2012,567614495,6/28/2012,8598,47.45,31.79,407975.10,273330.42,134644.68\r\nMiddle East and North Africa,Iran,Vegetables,Offline,M,12/16/2015,938025844,1/21/2016,1547,154.06,90.93,238330.82,140668.71,97662.11\r\nMiddle East and North Africa,Algeria,Vegetables,Online,C,2/25/2017,155710446,2/25/2017,7036,154.06,90.93,1083966.16,639783.48,444182.68\r\nSub-Saharan Africa,Central African Republic,Baby Food,Online,L,1/31/2012,945717132,2/13/2012,7570,255.28,159.42,1932469.60,1206809.40,725660.20\r\nCentral America and the Caribbean,The Bahamas,Cosmetics,Offline,C,2/7/2013,253407227,2/15/2013,7685,437.20,263.33,3359882.00,2023691.05,1336190.95\r\nSub-Saharan Africa,South Africa,Household,Offline,H,9/14/2014,494454562,9/22/2014,8948,668.27,502.54,5979679.96,4496727.92,1482952.04\r\nSub-Saharan Africa,Benin,Cereal,Online,M,6/5/2012,104845464,7/24/2012,4957,205.70,117.11,1019654.90,580514.27,439140.63\r\nEurope,Hungary,Cosmetics,Online,M,4/5/2014,290878760,4/7/2014,6344,437.20,263.33,2773596.80,1670565.52,1103031.28\r\nEurope,Austria,Office Supplies,Offline,C,2/2/2014,979165780,2/10/2014,5768,651.21,524.96,3756179.28,3027969.28,728210.00\r\nAsia,Tajikistan,Office Supplies,Offline,C,9/1/2010,366630351,10/12/2010,2923,651.21,524.96,1903486.83,1534458.08,369028.75\r\nEurope,Portugal,Office Supplies,Online,C,5/17/2011,770508801,6/25/2011,9532,651.21,524.96,6207333.72,5003918.72,1203415.00\r\nEurope,Belgium,Beverages,Offline,M,4/21/2013,978349959,5/21/2013,4349,47.45,31.79,206360.05,138254.71,68105.34\r\nEurope,Slovenia,Beverages,Offline,L,8/10/2014,298015153,8/14/2014,8161,47.45,31.79,387239.45,259438.19,127801.26\r\nEurope,Czech Republic,Snacks,Online,M,9/19/2010,807678210,10/30/2010,8786,152.58,97.44,1340567.88,856107.84,484460.04\r\nAustralia and Oceania,Marshall Islands,Personal Care,Offline,C,4/13/2013,605825459,5/14/2013,6071,81.73,56.67,496182.83,344043.57,152139.26\r\nSub-Saharan Africa,Sudan,Fruits,Online,C,1/28/2016,561255729,2/1/2016,6897,9.33,6.92,64349.01,47727.24,16621.77\r\nCentral America and the Caribbean,Dominican Republic,Clothes,Online,H,12/9/2013,263080346,12/14/2013,175,109.28,35.84,19124.00,6272.00,12852.00\r\nSub-Saharan Africa,Tanzania,Cereal,Offline,C,2/21/2014,270723140,3/9/2014,1848,205.70,117.11,380133.60,216419.28,163714.32\r\nEurope,Switzerland,Clothes,Offline,H,6/9/2017,763920438,7/10/2017,9888,109.28,35.84,1080560.64,354385.92,726174.72\r\nNorth America,Greenland,Household,Online,L,4/17/2014,192721068,5/20/2014,9302,668.27,502.54,6216247.54,4674627.08,1541620.46\r\nAustralia and Oceania,Tonga,Fruits,Offline,L,5/20/2011,227486360,6/8/2011,7124,9.33,6.92,66466.92,49298.08,17168.84\r\nMiddle East and North Africa,Saudi Arabia,Vegetables,Online,M,8/28/2012,808890140,9/22/2012,7422,154.06,90.93,1143433.32,674882.46,468550.86\r\nCentral America and the Caribbean,Belize,Cosmetics,Offline,C,7/25/2015,597918736,9/11/2015,6296,437.20,263.33,2752611.20,1657925.68,1094685.52\r\nSub-Saharan Africa,Angola,Cosmetics,Online,H,10/27/2014,125870978,11/20/2014,6874,437.20,263.33,3005312.80,1810130.42,1195182.38\r\nAsia,Malaysia,Household,Online,H,10/18/2013,444358193,10/21/2013,4319,668.27,502.54,2886258.13,2170470.26,715787.87\r\nSub-Saharan Africa,Ethiopia,Beverages,Online,C,2/15/2013,875304210,3/12/2013,822,47.45,31.79,39003.90,26131.38,12872.52\r\nNorth America,Greenland,Baby Food,Offline,C,7/8/2014,360945355,8/16/2014,607,255.28,159.42,154954.96,96767.94,58187.02\r\nSub-Saharan Africa,Benin,Cereal,Offline,C,12/12/2016,613830459,1/16/2017,4928,205.70,117.11,1013689.60,577118.08,436571.52\r\nMiddle East and North Africa,Yemen,Cereal,Offline,H,11/24/2012,266820847,12/10/2012,7073,205.70,117.11,1454916.10,828319.03,626597.07\r\nSub-Saharan Africa,Rwanda,Baby Food,Offline,M,11/3/2014,723090350,11/27/2014,7358,255.28,159.42,1878350.24,1173012.36,705337.88\r\nSub-Saharan Africa,Mauritania,Meat,Offline,M,8/3/2013,306125295,8/15/2013,8132,421.89,364.69,3430809.48,2965659.08,465150.40\r\nAustralia and Oceania,New Zealand,Personal Care,Online,L,5/23/2012,109724509,6/16/2012,8775,81.73,56.67,717180.75,497279.25,219901.50\r\nAustralia and Oceania,Samoa ,Clothes,Offline,M,7/22/2015,847999322,8/6/2015,699,109.28,35.84,76386.72,25052.16,51334.56\r\nAustralia and Oceania,Fiji,Clothes,Online,H,2/1/2017,605373561,3/2/2017,2344,109.28,35.84,256152.32,84008.96,172143.36\r\nSub-Saharan Africa,Malawi,Beverages,Online,H,1/28/2012,686583554,2/22/2012,4186,47.45,31.79,198625.70,133072.94,65552.76\r\nAustralia and Oceania,Marshall Islands,Beverages,Offline,M,8/3/2015,666678130,9/21/2015,3729,47.45,31.79,176941.05,118544.91,58396.14\r\nCentral America and the Caribbean,Grenada,Baby Food,Online,M,6/23/2013,641018617,6/30/2013,508,255.28,159.42,129682.24,80985.36,48696.88\r\nEurope,Luxembourg,Meat,Online,C,8/3/2011,775278842,9/22/2011,1093,421.89,364.69,461125.77,398606.17,62519.60\r\nSub-Saharan Africa,Zimbabwe,Meat,Offline,M,10/30/2016,855445134,12/6/2016,4080,421.89,364.69,1721311.20,1487935.20,233376.00\r\nAsia,China,Vegetables,Online,H,9/5/2010,737816321,9/21/2010,5100,154.06,90.93,785706.00,463743.00,321963.00\r\nNorth America,United States of America,Beverages,Online,L,7/13/2013,799003732,7/14/2013,1815,47.45,31.79,86121.75,57698.85,28422.90\r\nSub-Saharan Africa,Central African Republic,Vegetables,Online,L,10/9/2012,585931193,11/21/2012,8916,154.06,90.93,1373598.96,810731.88,562867.08\r\nCentral America and the Caribbean,Antigua and Barbuda ,Vegetables,Online,M,1/3/2012,165835034,1/5/2012,3127,154.06,90.93,481745.62,284338.11,197407.51\r\nCentral America and the Caribbean,Guatemala,Baby Food,Offline,H,2/8/2012,576264083,3/14/2012,8203,255.28,159.42,2094061.84,1307722.26,786339.58\r\nMiddle East and North Africa,Qatar,Clothes,Offline,L,1/3/2015,675079667,1/7/2015,9930,109.28,35.84,1085150.40,355891.20,729259.20\r\nMiddle East and North Africa,Israel,Personal Care,Online,L,5/13/2012,290455615,5/28/2012,1126,81.73,56.67,92027.98,63810.42,28217.56\r\nAsia,Thailand,Snacks,Offline,L,1/13/2012,670878255,2/15/2012,6639,152.58,97.44,1012978.62,646904.16,366074.46\r\nAsia,Singapore,Cereal,Online,M,7/30/2011,435146415,8/12/2011,8349,205.70,117.11,1717389.30,977751.39,739637.91\r\nAsia,North Korea,Snacks,Online,C,3/13/2017,522371423,4/8/2017,167,152.58,97.44,25480.86,16272.48,9208.38\r\nEurope,Austria,Office Supplies,Online,L,3/23/2017,141977107,4/18/2017,3036,651.21,524.96,1977073.56,1593778.56,383295.00\r\nAsia,Japan,Baby Food,Offline,L,3/16/2016,823699796,4/19/2016,9929,255.28,159.42,2534675.12,1582881.18,951793.94\r\nSub-Saharan Africa,Zimbabwe,Beverages,Offline,L,12/18/2015,567588317,12/26/2015,851,47.45,31.79,40379.95,27053.29,13326.66\r\nEurope,Lithuania,Fruits,Offline,H,10/25/2011,594003999,11/16/2011,7838,9.33,6.92,73128.54,54238.96,18889.58\r\nEurope,Luxembourg,Baby Food,Offline,H,6/30/2011,393620669,8/2/2011,9958,255.28,159.42,2542078.24,1587504.36,954573.88\r\nSub-Saharan Africa,Central African Republic,Cosmetics,Offline,H,3/27/2016,877424657,4/10/2016,8309,437.20,263.33,3632694.80,2188008.97,1444685.83\r\nEurope,Norway,Household,Offline,M,12/23/2016,326714789,1/21/2017,1021,668.27,502.54,682303.67,513093.34,169210.33\r\nSub-Saharan Africa,Democratic Republic of the Congo,Fruits,Offline,M,4/18/2013,243102395,4/18/2013,8256,9.33,6.92,77028.48,57131.52,19896.96\r\nAustralia and Oceania,New Zealand,Household,Offline,L,3/8/2017,398511302,4/20/2017,7205,668.27,502.54,4814885.35,3620800.70,1194084.65\r\nEurope,Ukraine,Personal Care,Offline,M,6/3/2011,185177838,7/4/2011,7092,81.73,56.67,579629.16,401903.64,177725.52\r\nAsia,Taiwan,Personal Care,Offline,H,11/30/2013,865650832,12/31/2013,4173,81.73,56.67,341059.29,236483.91,104575.38\r\nEurope,Italy,Cereal,Offline,C,5/11/2013,622791612,5/31/2013,6733,205.70,117.11,1384978.10,788501.63,596476.47\r\nEurope,Finland,Personal Care,Online,L,11/13/2010,409774005,11/27/2010,89,81.73,56.67,7273.97,5043.63,2230.34\r\nSub-Saharan Africa,Sudan,Office Supplies,Online,H,3/9/2016,800084340,4/21/2016,1591,651.21,524.96,1036075.11,835211.36,200863.75\r\nEurope,Croatia,Snacks,Offline,M,8/19/2013,637521445,9/12/2013,5618,152.58,97.44,857194.44,547417.92,309776.52\r\nSub-Saharan Africa,Mauritania,Beverages,Online,L,4/19/2011,186196649,5/28/2011,8581,47.45,31.79,407168.45,272789.99,134378.46\r\nAustralia and Oceania,New Zealand,Baby Food,Offline,L,7/20/2014,680533778,7/25/2014,3923,255.28,159.42,1001463.44,625404.66,376058.78\r\nMiddle East and North Africa,Pakistan,Beverages,Online,L,9/8/2014,275269162,9/15/2014,7117,47.45,31.79,337701.65,226249.43,111452.22\r\nEurope,Poland,Household,Online,C,6/4/2015,795451629,6/19/2015,668,668.27,502.54,446404.36,335696.72,110707.64\r\nEurope,Lithuania,Cereal,Offline,M,12/19/2013,986442506,1/1/2014,9113,205.70,117.11,1874544.10,1067223.43,807320.67\r\nMiddle East and North Africa,Pakistan,Cereal,Offline,M,5/18/2012,563915622,6/10/2012,4019,205.70,117.11,826708.30,470665.09,356043.21\r\nAustralia and Oceania,East Timor,Cosmetics,Offline,C,10/12/2013,663857305,11/13/2013,8984,437.20,263.33,3927804.80,2365756.72,1562048.08\r\nAustralia and Oceania,Marshall Islands,Fruits,Online,L,1/2/2011,692566382,1/14/2011,4638,9.33,6.92,43272.54,32094.96,11177.58\r\nCentral America and the Caribbean,Cuba,Household,Offline,L,2/2/2013,576654183,2/3/2013,3642,668.27,502.54,2433839.34,1830250.68,603588.66\r\nNorth America,Greenland,Baby Food,Offline,H,3/19/2011,313044536,4/14/2011,5689,255.28,159.42,1452287.92,906940.38,545347.54\r\nEurope,Luxembourg,Personal Care,Offline,C,10/3/2012,418973767,10/27/2012,2503,81.73,56.67,204570.19,141845.01,62725.18\r\nMiddle East and North Africa,Israel,Beverages,Online,C,10/23/2014,581990706,11/15/2014,2838,47.45,31.79,134663.10,90220.02,44443.08\r\nSub-Saharan Africa,Djibouti,Baby Food,Online,H,7/12/2015,109956681,7/24/2015,7480,255.28,159.42,1909494.40,1192461.60,717032.80\r\nEurope,Bulgaria,Cereal,Online,L,5/6/2010,181045520,5/27/2010,4247,205.70,117.11,873607.90,497366.17,376241.73\r\nAsia,Mongolia,Vegetables,Online,C,11/27/2010,693743550,1/9/2011,2988,154.06,90.93,460331.28,271698.84,188632.44\r\nCentral America and the Caribbean,Dominican Republic,Clothes,Offline,L,12/26/2010,716849601,12/31/2010,582,109.28,35.84,63600.96,20858.88,42742.08\r\nMiddle East and North Africa,Yemen,Cosmetics,Online,L,12/30/2012,739474999,1/1/2013,5940,437.20,263.33,2596968.00,1564180.20,1032787.80\r\nAustralia and Oceania,Federated States of Micronesia,Personal Care,Online,M,8/21/2016,421043574,9/7/2016,5005,81.73,56.67,409058.65,283633.35,125425.30\r\nEurope,Finland,Personal Care,Online,M,2/3/2015,841291654,3/20/2015,5751,81.73,56.67,470029.23,325909.17,144120.06\r\nCentral America and the Caribbean,The Bahamas,Cereal,Offline,L,12/19/2013,450268065,1/4/2014,3181,205.70,117.11,654331.70,372526.91,281804.79\r\nCentral America and the Caribbean,Grenada,Meat,Online,L,5/12/2012,918334138,6/12/2012,4334,421.89,364.69,1828471.26,1580566.46,247904.80\r\nSub-Saharan Africa,Sao Tome and Principe,Meat,Offline,M,3/28/2014,386163699,4/19/2014,3275,421.89,364.69,1381689.75,1194359.75,187330.00\r\nCentral America and the Caribbean,El Salvador,Personal Care,Offline,C,1/11/2017,214743077,2/18/2017,6103,81.73,56.67,498798.19,345857.01,152941.18\r\nEurope,Sweden,Baby Food,Online,M,6/21/2015,935371100,7/6/2015,5949,255.28,159.42,1518660.72,948389.58,570271.14\r\nAsia,Turkmenistan,Cosmetics,Offline,H,11/29/2012,899659097,12/3/2012,7974,437.20,263.33,3486232.80,2099793.42,1386439.38\r\nEurope,Monaco,Vegetables,Online,H,1/1/2010,329530894,2/13/2010,4369,154.06,90.93,673088.14,397273.17,275814.97\r\nMiddle East and North Africa,Turkey,Meat,Online,H,1/6/2016,867222821,2/6/2016,9359,421.89,364.69,3948468.51,3413133.71,535334.80\r\nSub-Saharan Africa,Mozambique,Beverages,Online,M,10/14/2014,625283706,10/23/2014,4199,47.45,31.79,199242.55,133486.21,65756.34\r\nMiddle East and North Africa,Yemen,Office Supplies,Offline,C,12/9/2013,936574876,1/9/2014,2173,651.21,524.96,1415079.33,1140738.08,274341.25\r\nAsia,Philippines,Cereal,Offline,M,10/19/2010,504270160,11/25/2010,3601,205.70,117.11,740725.70,421713.11,319012.59\r\nSub-Saharan Africa,Democratic Republic of the Congo,Personal Care,Offline,M,5/2/2011,351855885,6/2/2011,830,81.73,56.67,67835.90,47036.10,20799.80\r\nAustralia and Oceania,Fiji,Snacks,Online,H,3/17/2011,673130881,3/23/2011,3241,152.58,97.44,494511.78,315803.04,178708.74\r\nEurope,Macedonia,Office Supplies,Offline,H,9/24/2014,382206475,10/13/2014,2244,651.21,524.96,1461315.24,1178010.24,283305.00\r\nMiddle East and North Africa,Tunisia ,Cereal,Online,H,12/1/2015,263506495,12/14/2015,6283,205.70,117.11,1292413.10,735802.13,556610.97\r\nEurope,Liechtenstein,Cereal,Offline,L,6/2/2017,721767270,7/18/2017,5829,205.70,117.11,1199025.30,682634.19,516391.11\r\nMiddle East and North Africa,Qatar,Cosmetics,Online,M,8/4/2011,432037627,8/18/2011,8390,437.20,263.33,3668108.00,2209338.70,1458769.30\r\nAustralia and Oceania,Tonga,Meat,Offline,C,7/29/2014,389678895,8/24/2014,3499,421.89,364.69,1476193.11,1276050.31,200142.80\r\nEurope,Belgium,Meat,Online,L,1/26/2017,760364902,2/24/2017,7726,421.89,364.69,3259522.14,2817594.94,441927.20\r\nSub-Saharan Africa,Chad,Fruits,Offline,C,11/5/2010,430081975,12/9/2010,9669,9.33,6.92,90211.77,66909.48,23302.29\r\nAsia,Thailand,Baby Food,Online,H,3/26/2015,155128943,5/5/2015,4957,255.28,159.42,1265422.96,790244.94,475178.02\r\nEurope,Iceland,Clothes,Offline,H,10/7/2012,312117135,10/16/2012,1251,109.28,35.84,136709.28,44835.84,91873.44\r\nCentral America and the Caribbean,Saint Lucia,Meat,Offline,L,7/22/2013,447970378,9/2/2013,3245,421.89,364.69,1369033.05,1183419.05,185614.00\r\nAsia,Japan,Cosmetics,Offline,C,8/16/2013,629925000,8/18/2013,7661,437.20,263.33,3349389.20,2017371.13,1332018.07\r\nAsia,India,Personal Care,Offline,L,11/5/2013,995529830,12/17/2013,8254,81.73,56.67,674599.42,467754.18,206845.24\r\nAustralia and Oceania,Vanuatu,Office Supplies,Online,L,3/1/2016,402646195,3/28/2016,812,651.21,524.96,528782.52,426267.52,102515.00\r\nSub-Saharan Africa,Chad,Meat,Offline,M,3/25/2012,479447925,4/4/2012,8150,421.89,364.69,3438403.50,2972223.50,466180.00\r\nSub-Saharan Africa,Malawi,Cosmetics,Offline,H,6/20/2017,674421346,6/29/2017,5118,437.20,263.33,2237589.60,1347722.94,889866.66\r\nEurope,Finland,Cosmetics,Online,L,4/18/2014,506365287,5/16/2014,3596,437.20,263.33,1572171.20,946934.68,625236.52\r\nMiddle East and North Africa,Turkey,Clothes,Online,C,6/28/2016,914391076,8/4/2016,7494,109.28,35.84,818944.32,268584.96,550359.36\r\nSub-Saharan Africa,South Africa,Meat,Online,L,5/20/2012,207922542,7/1/2012,7755,421.89,364.69,3271756.95,2828170.95,443586.00\r\nEurope,Lithuania,Office Supplies,Offline,M,2/4/2014,816696012,2/16/2014,7353,651.21,524.96,4788347.13,3860030.88,928316.25\r\nEurope,Russia,Beverages,Offline,L,11/15/2015,740760314,11/21/2015,6293,47.45,31.79,298602.85,200054.47,98548.38\r\nCentral America and the Caribbean,The Bahamas,Baby Food,Online,C,1/11/2013,300476777,2/28/2013,6610,255.28,159.42,1687400.80,1053766.20,633634.60\r\nCentral America and the Caribbean,The Bahamas,Snacks,Online,L,4/24/2013,786519229,6/7/2013,7373,152.58,97.44,1124972.34,718425.12,406547.22\r\nMiddle East and North Africa,Turkey,Cosmetics,Offline,C,5/15/2010,409873998,6/3/2010,9679,437.20,263.33,4231658.80,2548771.07,1682887.73\r\nSub-Saharan Africa,Mauritius ,Cosmetics,Offline,H,4/17/2010,151839911,5/22/2010,1659,437.20,263.33,725314.80,436864.47,288450.33\r\nEurope,Bulgaria,Vegetables,Online,H,8/25/2012,614028298,9/9/2012,3473,154.06,90.93,535050.38,315799.89,219250.49\r\nMiddle East and North Africa,Iran,Household,Offline,L,4/19/2014,668362987,5/13/2014,2315,668.27,502.54,1547045.05,1163380.10,383664.95\r\nSub-Saharan Africa,Ghana,Household,Online,M,2/26/2013,607080304,4/5/2013,7408,668.27,502.54,4950544.16,3722816.32,1227727.84\r\nSub-Saharan Africa,Malawi,Baby Food,Online,M,12/28/2011,792729079,1/17/2012,5006,255.28,159.42,1277931.68,798056.52,479875.16\r\nSub-Saharan Africa,Zimbabwe,Baby Food,Offline,M,8/21/2014,308170640,10/10/2014,3395,255.28,159.42,866675.60,541230.90,325444.70\r\nAsia,Tajikistan,Vegetables,Online,H,8/21/2014,106578814,10/2/2014,7894,154.06,90.93,1216149.64,717801.42,498348.22\r\nEurope,Czech Republic,Cereal,Online,H,3/2/2014,761439931,3/28/2014,5851,205.70,117.11,1203550.70,685210.61,518340.09\r\nSub-Saharan Africa,Mauritius ,Household,Online,L,9/6/2012,216552817,9/27/2012,1646,668.27,502.54,1099972.42,827180.84,272791.58\r\nSub-Saharan Africa,Lesotho,Fruits,Online,H,9/16/2010,536028802,9/22/2010,1689,9.33,6.92,15758.37,11687.88,4070.49\r\nSub-Saharan Africa,Mali,Beverages,Online,L,8/13/2013,254291713,8/15/2013,9424,47.45,31.79,447168.80,299588.96,147579.84\r\nEurope,Georgia,Personal Care,Online,C,9/11/2012,226077878,10/23/2012,323,81.73,56.67,26398.79,18304.41,8094.38\r\nEurope,Albania,Office Supplies,Offline,M,8/31/2011,476436126,10/15/2011,6892,651.21,524.96,4488139.32,3618024.32,870115.00\r\nEurope,Cyprus,Cosmetics,Offline,L,4/21/2015,650727784,6/6/2015,3667,437.20,263.33,1603212.40,965631.11,637581.29\r\nCentral America and the Caribbean,Saint Kitts and Nevis ,Household,Offline,C,7/11/2010,464626681,7/27/2010,2215,668.27,502.54,1480218.05,1113126.10,367091.95\r\nMiddle East and North Africa,Tunisia ,Meat,Offline,C,8/9/2015,154119145,9/21/2015,6135,421.89,364.69,2588295.15,2237373.15,350922.00\r\nCentral America and the Caribbean,Cuba,Meat,Online,M,10/17/2015,925504004,12/6/2015,6057,421.89,364.69,2555387.73,2208927.33,346460.40\r\nAustralia and Oceania,Kiribati,Cereal,Offline,L,7/24/2012,905392587,8/16/2012,4641,205.70,117.11,954653.70,543507.51,411146.19\r\nAsia,Cambodia,Snacks,Online,C,3/25/2012,990708720,5/4/2012,1581,152.58,97.44,241228.98,154052.64,87176.34\r\nEurope,Moldova ,Baby Food,Online,M,8/11/2014,798688733,9/18/2014,8600,255.28,159.42,2195408.00,1371012.00,824396.00\r\nAsia,Uzbekistan,Cereal,Offline,C,10/15/2016,916881453,11/28/2016,4452,205.70,117.11,915776.40,521373.72,394402.68\r\nAsia,India,Cosmetics,Offline,L,12/3/2016,653148210,1/21/2017,9924,437.20,263.33,4338772.80,2613286.92,1725485.88\r\nEurope,Germany,Personal Care,Offline,C,6/12/2010,285662829,7/13/2010,2834,81.73,56.67,231622.82,160602.78,71020.04\r\nEurope,Austria,Vegetables,Online,C,7/29/2016,612911641,8/31/2016,3030,154.06,90.93,466801.80,275517.90,191283.90\r\nEurope,Germany,Office Supplies,Offline,L,12/9/2013,703693473,1/12/2014,7391,651.21,524.96,4813093.11,3879979.36,933113.75\r\nAsia,Bhutan,Clothes,Online,M,7/12/2012,147119653,8/9/2012,4829,109.28,35.84,527713.12,173071.36,354641.76\r\nAsia,Kyrgyzstan,Fruits,Online,C,1/14/2012,402614009,3/2/2012,1287,9.33,6.92,12007.71,8906.04,3101.67\r\nMiddle East and North Africa,Somalia,Personal Care,Online,C,3/20/2013,749912869,4/25/2013,4738,81.73,56.67,387236.74,268502.46,118734.28\r\nCentral America and the Caribbean,Saint Lucia,Household,Online,H,2/10/2014,539065062,3/10/2014,186,668.27,502.54,124298.22,93472.44,30825.78\r\nEurope,Armenia,Snacks,Offline,H,10/26/2013,540431916,11/15/2013,4668,152.58,97.44,712243.44,454849.92,257393.52\r\nNorth America,Canada,Beverages,Online,C,4/16/2016,694687259,6/2/2016,2252,47.45,31.79,106857.40,71591.08,35266.32\r\nSub-Saharan Africa,Burundi,Cosmetics,Offline,H,5/27/2011,562817418,6/2/2011,9036,437.20,263.33,3950539.20,2379449.88,1571089.32\r\nEurope,Liechtenstein,Cereal,Online,L,8/4/2016,676121222,9/9/2016,8149,205.70,117.11,1676249.30,954329.39,721919.91\r\nMiddle East and North Africa,Tunisia ,Snacks,Offline,L,7/3/2012,286210000,8/5/2012,4754,152.58,97.44,725365.32,463229.76,262135.56\r\nMiddle East and North Africa,Iraq,Beverages,Online,L,12/4/2014,515007579,1/11/2015,1042,47.45,31.79,49442.90,33125.18,16317.72\r\nAsia,Indonesia,Cosmetics,Offline,C,5/31/2010,304750287,6/1/2010,1237,437.20,263.33,540816.40,325739.21,215077.19\r\nAsia,Kazakhstan,Beverages,Online,H,2/5/2013,467986953,2/17/2013,6594,47.45,31.79,312885.30,209623.26,103262.04\r\nEurope,Denmark,Beverages,Offline,C,6/15/2015,537578904,7/9/2015,399,47.45,31.79,18932.55,12684.21,6248.34\r\nEurope,Luxembourg,Vegetables,Offline,L,10/21/2014,116699969,11/18/2014,2969,154.06,90.93,457404.14,269971.17,187432.97\r\nSub-Saharan Africa,Cape Verde,Snacks,Offline,C,2/13/2017,228836476,3/13/2017,6653,152.58,97.44,1015114.74,648268.32,366846.42\r\nAustralia and Oceania,Palau,Vegetables,Offline,C,6/29/2010,167787253,7/16/2010,832,154.06,90.93,128177.92,75653.76,52524.16\r\nAustralia and Oceania,Australia,Vegetables,Online,M,5/19/2014,647663629,5/20/2014,6915,154.06,90.93,1065324.90,628780.95,436543.95\r\nCentral America and the Caribbean,Nicaragua,Meat,Offline,L,3/21/2015,652889430,4/15/2015,3346,421.89,364.69,1411643.94,1220252.74,191391.20\r\nAsia,Laos,Office Supplies,Offline,M,8/31/2015,588200986,10/15/2015,598,651.21,524.96,389423.58,313926.08,75497.50\r\nCentral America and the Caribbean,Cuba,Personal Care,Online,L,8/23/2015,928647124,8/30/2015,6176,81.73,56.67,504764.48,349993.92,154770.56\r\nEurope,Moldova ,Cosmetics,Offline,L,2/24/2016,869589173,3/17/2016,9615,437.20,263.33,4203678.00,2531917.95,1671760.05\r\nMiddle East and North Africa,Syria,Household,Online,C,6/17/2015,576700961,7/23/2015,7485,668.27,502.54,5002000.95,3761511.90,1240489.05\r\nCentral America and the Caribbean,The Bahamas,Cereal,Offline,M,11/27/2012,735968816,12/6/2012,8382,205.70,117.11,1724177.40,981616.02,742561.38\r\nEurope,Belarus,Snacks,Offline,M,9/7/2012,303691565,10/19/2012,7938,152.58,97.44,1211180.04,773478.72,437701.32\r\nMiddle East and North Africa,United Arab Emirates,Clothes,Offline,C,6/23/2012,556480538,8/7/2012,3812,109.28,35.84,416575.36,136622.08,279953.28\r\nSub-Saharan Africa,Angola,Beverages,Offline,H,10/23/2014,141259562,11/11/2014,698,47.45,31.79,33120.10,22189.42,10930.68\r\nCentral America and the Caribbean,Cuba,Cosmetics,Offline,C,9/18/2015,925264966,10/18/2015,5320,437.20,263.33,2325904.00,1400915.60,924988.40\r\nEurope,Ukraine,Office Supplies,Online,H,1/24/2016,346045577,2/20/2016,1431,651.21,524.96,931881.51,751217.76,180663.75\r\nSub-Saharan Africa,Mozambique,Fruits,Offline,H,3/23/2010,861462724,4/19/2010,4818,9.33,6.92,44951.94,33340.56,11611.38\r\nEurope,Armenia,Personal Care,Online,M,7/26/2012,499690234,8/28/2012,8299,81.73,56.67,678277.27,470304.33,207972.94\r\nNorth America,Greenland,Clothes,Online,H,10/20/2015,509214437,11/2/2015,6722,109.28,35.84,734580.16,240916.48,493663.68\r\nCentral America and the Caribbean,Saint Kitts and Nevis ,Office Supplies,Online,M,6/27/2017,408834159,7/18/2017,1968,651.21,524.96,1281581.28,1033121.28,248460.00\r\nEurope,Vatican City,Beverages,Offline,M,4/4/2016,237660729,4/30/2016,7946,47.45,31.79,377037.70,252603.34,124434.36\r\nEurope,Ukraine,Clothes,Online,C,8/5/2015,105117976,9/9/2015,5600,109.28,35.84,611968.00,200704.00,411264.00\r\nSub-Saharan Africa,Niger,Cereal,Offline,L,6/16/2012,640942227,7/4/2012,7903,205.70,117.11,1625647.10,925520.33,700126.77\r\nAsia,Myanmar,Cosmetics,Online,L,4/3/2016,745182311,5/5/2016,4860,437.20,263.33,2124792.00,1279783.80,845008.20\r\nSub-Saharan Africa,Guinea,Baby Food,Offline,C,9/21/2014,738199555,9/21/2014,8508,255.28,159.42,2171922.24,1356345.36,815576.88\r\nSub-Saharan Africa,Guinea-Bissau,Snacks,Online,L,8/8/2015,110667788,9/10/2015,7913,152.58,97.44,1207365.54,771042.72,436322.82\r\nSub-Saharan Africa,South Sudan,Office Supplies,Online,C,7/19/2012,673573338,7/20/2012,4174,651.21,524.96,2718150.54,2191183.04,526967.50\r\nMiddle East and North Africa,Turkey,Snacks,Offline,H,8/26/2011,708215034,9/13/2011,5421,152.58,97.44,827136.18,528222.24,298913.94\r\nAustralia and Oceania,Palau,Household,Online,M,6/23/2012,816204202,7/1/2012,1816,668.27,502.54,1213578.32,912612.64,300965.68\r\nEurope,Poland,Beverages,Offline,L,11/20/2011,769464671,12/24/2011,550,47.45,31.79,26097.50,17484.50,8613.00\r\nAsia,Malaysia,Beverages,Offline,L,5/13/2015,860232770,6/4/2015,848,47.45,31.79,40237.60,26957.92,13279.68\r\nNorth America,United States of America,Personal Care,Offline,C,7/16/2010,551057326,8/22/2010,8963,81.73,56.67,732545.99,507933.21,224612.78\r\nEurope,Switzerland,Cosmetics,Online,C,5/21/2016,724799668,5/27/2016,3183,437.20,263.33,1391607.60,838179.39,553428.21\r\nAustralia and Oceania,Papua New Guinea,Cosmetics,Offline,H,4/22/2011,534633624,6/8/2011,8825,437.20,263.33,3858290.00,2323887.25,1534402.75\r\nSub-Saharan Africa,Namibia,Beverages,Offline,H,8/14/2012,554045522,9/20/2012,3237,47.45,31.79,153595.65,102904.23,50691.42\r\nEurope,Ireland,Clothes,Online,C,3/17/2012,526834189,5/2/2012,799,109.28,35.84,87314.72,28636.16,58678.56\r\nSub-Saharan Africa,Mozambique,Household,Online,C,8/6/2010,717110955,8/9/2010,7922,668.27,502.54,5294034.94,3981121.88,1312913.06\r\nSub-Saharan Africa,Democratic Republic of the Congo,Baby Food,Offline,L,2/25/2013,559299647,3/26/2013,8049,255.28,159.42,2054748.72,1283171.58,771577.14\r\nNorth America,United States of America,Meat,Online,M,3/6/2011,908136594,3/10/2011,6654,421.89,364.69,2807256.06,2426647.26,380608.80\r\nMiddle East and North Africa,Azerbaijan,Office Supplies,Offline,M,12/14/2015,888670623,12/16/2015,6240,651.21,524.96,4063550.40,3275750.40,787800.00\r\nEurope,Belgium,Office Supplies,Offline,C,2/10/2017,146263062,2/16/2017,1345,651.21,524.96,875877.45,706071.20,169806.25\r\nAsia,Taiwan,Office Supplies,Offline,L,9/20/2016,196587741,10/28/2016,3536,651.21,524.96,2302678.56,1856258.56,446420.00\r\nCentral America and the Caribbean,Panama,Baby Food,Online,M,4/30/2010,375630986,6/2/2010,6411,255.28,159.42,1636600.08,1022041.62,614558.46\r\nEurope,Andorra,Beverages,Offline,H,6/25/2013,989691627,7/10/2013,600,47.45,31.79,28470.00,19074.00,9396.00\r\nEurope,Georgia,Household,Offline,H,7/4/2012,165380990,7/27/2012,8765,668.27,502.54,5857386.55,4404763.10,1452623.45\r\nCentral America and the Caribbean,Barbados,Snacks,Online,C,9/21/2013,599622905,10/22/2013,597,152.58,97.44,91090.26,58171.68,32918.58\r\nEurope,Sweden,Personal Care,Offline,C,12/8/2016,109653699,1/6/2017,7821,81.73,56.67,639210.33,443216.07,195994.26\r\nMiddle East and North Africa,Algeria,Meat,Offline,M,9/2/2011,183022201,10/15/2011,9191,421.89,364.69,3877590.99,3351865.79,525725.20\r\nEurope,Italy,Personal Care,Online,L,3/21/2011,127589738,4/2/2011,5494,81.73,56.67,449024.62,311344.98,137679.64\r\nEurope,Russia,Fruits,Offline,L,1/8/2011,221530139,1/26/2011,4546,9.33,6.92,42414.18,31458.32,10955.86\r\nCentral America and the Caribbean,Antigua and Barbuda ,Office Supplies,Offline,M,2/22/2015,363329732,2/22/2015,6197,651.21,524.96,4035548.37,3253177.12,782371.25\r\nMiddle East and North Africa,Jordan,Fruits,Online,C,5/15/2017,521787345,6/25/2017,7325,9.33,6.92,68342.25,50689.00,17653.25\r\nSub-Saharan Africa,Mali,Meat,Online,L,7/14/2012,286014306,8/15/2012,6844,421.89,364.69,2887415.16,2495938.36,391476.80\r\nMiddle East and North Africa,Somalia,Cereal,Offline,C,6/25/2015,215434443,6/30/2015,694,205.70,117.11,142755.80,81274.34,61481.46\r\nMiddle East and North Africa,Kuwait,Snacks,Online,L,10/26/2011,489784085,11/1/2011,6850,152.58,97.44,1045173.00,667464.00,377709.00\r\nSub-Saharan Africa,Liberia,Office Supplies,Offline,C,9/24/2014,459112060,10/12/2014,316,651.21,524.96,205782.36,165887.36,39895.00\r\nAsia,China,Office Supplies,Online,C,9/30/2015,893779695,11/7/2015,8128,651.21,524.96,5293034.88,4266874.88,1026160.00\r\nEurope,Andorra,Meat,Offline,M,3/31/2011,834460818,3/31/2011,4355,421.89,364.69,1837330.95,1588224.95,249106.00\r\nSub-Saharan Africa,Niger,Beverages,Online,C,10/25/2013,742141759,10/28/2013,5093,47.45,31.79,241662.85,161906.47,79756.38\r\nEurope,Hungary,Vegetables,Offline,M,8/12/2010,248121345,9/14/2010,3475,154.06,90.93,535358.50,315981.75,219376.75\r\nEurope,Monaco,Clothes,Offline,M,7/26/2012,404010903,9/4/2012,4659,109.28,35.84,509135.52,166978.56,342156.96\r\nAustralia and Oceania,Tuvalu,Household,Online,L,9/30/2012,531734263,10/12/2012,840,668.27,502.54,561346.80,422133.60,139213.20\r\nSub-Saharan Africa,South Sudan,Baby Food,Online,C,11/9/2012,473527753,12/29/2012,6240,255.28,159.42,1592947.20,994780.80,598166.40\r\nEurope,Cyprus,Cereal,Offline,M,11/19/2011,141940200,1/2/2012,2114,205.70,117.11,434849.80,247570.54,187279.26\r\nEurope,Poland,Household,Offline,M,6/9/2017,869832932,7/25/2017,1749,668.27,502.54,1168804.23,878942.46,289861.77\r\nSub-Saharan Africa,Liberia,Snacks,Online,H,9/17/2011,460379779,11/4/2011,5462,152.58,97.44,833391.96,532217.28,301174.68\r\nSub-Saharan Africa,Cote d'Ivoire,Vegetables,Online,C,10/23/2015,837067067,10/26/2015,5602,154.06,90.93,863044.12,509389.86,353654.26\r\nAsia,Kyrgyzstan,Beverages,Online,C,4/3/2010,393693625,4/9/2010,1547,47.45,31.79,73405.15,49179.13,24226.02\r\nEurope,Slovakia,Vegetables,Offline,L,7/3/2014,744370782,7/14/2014,4711,154.06,90.93,725776.66,428371.23,297405.43\r\nAsia,Malaysia,Cosmetics,Offline,M,12/30/2014,873522365,1/13/2015,3534,437.20,263.33,1545064.80,930608.22,614456.58\r\nSub-Saharan Africa,Liberia,Beverages,Online,L,5/19/2014,285884702,6/10/2014,8491,47.45,31.79,402897.95,269928.89,132969.06\r\nAustralia and Oceania,Vanuatu,Cosmetics,Online,H,8/4/2012,356506621,9/3/2012,7086,437.20,263.33,3097999.20,1865956.38,1232042.82\r\nAustralia and Oceania,Kiribati,Baby Food,Offline,L,8/15/2010,280749452,10/1/2010,8856,255.28,159.42,2260759.68,1411823.52,848936.16\r\nMiddle East and North Africa,Turkey,Baby Food,Online,M,4/26/2014,224287021,5/17/2014,368,255.28,159.42,93943.04,58666.56,35276.48\r\nEurope,San Marino,Fruits,Offline,M,6/10/2015,873105657,6/23/2015,221,9.33,6.92,2061.93,1529.32,532.61\r\nEurope,Vatican City,Snacks,Offline,C,8/12/2010,283504188,9/2/2010,4044,152.58,97.44,617033.52,394047.36,222986.16\r\nMiddle East and North Africa,Morocco,Beverages,Offline,C,8/28/2012,632093942,9/5/2012,9499,47.45,31.79,450727.55,301973.21,148754.34\r\nSub-Saharan Africa,Equatorial Guinea,Meat,Offline,L,7/15/2016,565798747,8/9/2016,1277,421.89,364.69,538753.53,465709.13,73044.40\r\nMiddle East and North Africa,Jordan,Vegetables,Online,M,9/14/2010,151854932,10/19/2010,6104,154.06,90.93,940382.24,555036.72,385345.52\r\nAsia,Kyrgyzstan,Vegetables,Online,H,3/7/2011,427811324,4/16/2011,7733,154.06,90.93,1191345.98,703161.69,488184.29\r\nSub-Saharan Africa,Republic of the Congo,Fruits,Online,L,4/30/2012,251529252,5/5/2012,1950,9.33,6.92,18193.50,13494.00,4699.50\r\nAustralia and Oceania,East Timor,Snacks,Offline,C,5/18/2013,351182544,6/22/2013,1574,152.58,97.44,240160.92,153370.56,86790.36\r\nEurope,Estonia,Meat,Offline,H,8/10/2014,175257527,9/25/2014,1452,421.89,364.69,612584.28,529529.88,83054.40\r\nAsia,Bangladesh,Snacks,Online,H,7/31/2013,142553031,9/11/2013,3465,152.58,97.44,528689.70,337629.60,191060.10\r\nSub-Saharan Africa,Senegal,Fruits,Offline,H,7/2/2016,292180383,8/15/2016,1523,9.33,6.92,14209.59,10539.16,3670.43\r\nMiddle East and North Africa,Pakistan,Fruits,Offline,L,9/13/2011,733563411,9/20/2011,6569,9.33,6.92,61288.77,45457.48,15831.29\r\nEurope,Czech Republic,Beverages,Online,H,4/18/2011,296438443,4/19/2011,1578,47.45,31.79,74876.10,50164.62,24711.48\r\nSub-Saharan Africa,Ghana,Meat,Offline,C,2/9/2017,580854308,3/18/2017,6552,421.89,364.69,2764223.28,2389448.88,374774.40\r\nAsia,Japan,Cosmetics,Offline,H,11/20/2016,107172334,12/23/2016,3530,437.20,263.33,1543316.00,929554.90,613761.10\r\nAsia,Kazakhstan,Baby Food,Offline,H,10/16/2010,166066348,12/5/2010,1578,255.28,159.42,402831.84,251564.76,151267.08\r\nCentral America and the Caribbean,The Bahamas,Snacks,Offline,H,3/15/2015,768522679,3/27/2015,1794,152.58,97.44,273728.52,174807.36,98921.16\r\nSub-Saharan Africa,Ethiopia,Household,Online,M,6/25/2013,195840156,7/25/2013,2309,668.27,502.54,1543035.43,1160364.86,382670.57\r\nSub-Saharan Africa,Burkina Faso,Cosmetics,Offline,L,10/11/2012,849630105,11/9/2012,3284,437.20,263.33,1435764.80,864775.72,570989.08\r\nSub-Saharan Africa,Madagascar,Fruits,Offline,M,7/8/2017,701816356,7/30/2017,1910,9.33,6.92,17820.30,13217.20,4603.10\r\nEurope,Netherlands,Office Supplies,Online,M,6/22/2010,944635236,7/27/2010,7413,651.21,524.96,4827419.73,3891528.48,935891.25\r\nEurope,Greece,Vegetables,Online,L,2/17/2017,140635573,3/21/2017,6046,154.06,90.93,931446.76,549762.78,381683.98\r\nMiddle East and North Africa,Egypt,Meat,Online,C,1/14/2011,972678697,2/25/2011,6096,421.89,364.69,2571841.44,2223150.24,348691.20\r\nSub-Saharan Africa,South Sudan,Fruits,Online,M,1/9/2016,793938434,2/8/2016,2880,9.33,6.92,26870.40,19929.60,6940.80\r\nEurope,Kosovo,Baby Food,Online,L,7/18/2011,177901113,8/13/2011,3747,255.28,159.42,956534.16,597346.74,359187.42\r\nAsia,Brunei,Beverages,Online,L,3/16/2012,668365561,5/4/2012,3077,47.45,31.79,146003.65,97817.83,48185.82\r\nAustralia and Oceania,Australia,Vegetables,Online,C,12/15/2010,729443109,1/12/2011,7281,154.06,90.93,1121710.86,662061.33,459649.53\r\nSub-Saharan Africa,Cape Verde,Fruits,Offline,H,3/2/2013,695557582,4/3/2013,9800,9.33,6.92,91434.00,67816.00,23618.00\r\nSub-Saharan Africa,Malawi,Household,Offline,H,2/17/2010,521445310,4/4/2010,6110,668.27,502.54,4083129.70,3070519.40,1012610.30\r\nAsia,Philippines,Personal Care,Online,L,2/19/2013,232155120,3/30/2013,8714,81.73,56.67,712195.22,493822.38,218372.84\r\nEurope,Estonia,Beverages,Online,L,10/28/2011,373048341,12/12/2011,2149,47.45,31.79,101970.05,68316.71,33653.34\r\nCentral America and the Caribbean,Trinidad and Tobago,Office Supplies,Offline,L,10/26/2015,659798800,12/2/2015,7982,651.21,524.96,5197958.22,4190230.72,1007727.50\r\nAsia,Mongolia,Household,Online,C,2/5/2013,428392827,2/5/2013,9812,668.27,502.54,6557065.24,4930922.48,1626142.76\r\nAsia,Japan,Personal Care,Offline,M,8/25/2011,885129249,9/3/2011,8269,81.73,56.67,675825.37,468604.23,207221.14\r\nSub-Saharan Africa,Niger,Meat,Online,C,12/4/2012,156619393,12/5/2012,6014,421.89,364.69,2537246.46,2193245.66,344000.80\r\nMiddle East and North Africa,Egypt,Baby Food,Offline,M,9/8/2015,939787089,9/9/2015,2739,255.28,159.42,699211.92,436651.38,262560.54\r\nCentral America and the Caribbean,Saint Lucia,Vegetables,Online,C,3/1/2012,151868665,4/19/2012,168,154.06,90.93,25882.08,15276.24,10605.84\r\nMiddle East and North Africa,Qatar,Cereal,Offline,C,8/5/2014,180412948,8/24/2014,7055,205.70,117.11,1451213.50,826211.05,625002.45\r\nSub-Saharan Africa,Mali,Fruits,Offline,H,7/24/2013,333281266,7/28/2013,4188,9.33,6.92,39074.04,28980.96,10093.08\r\nCentral America and the Caribbean,Saint Lucia,Cosmetics,Online,L,1/26/2012,888647449,2/28/2012,9383,437.20,263.33,4102247.60,2470825.39,1631422.21\r\nSub-Saharan Africa,Swaziland,Clothes,Offline,M,3/10/2014,844997823,4/26/2014,2488,109.28,35.84,271888.64,89169.92,182718.72\r\nAsia,Mongolia,Fruits,Online,M,9/12/2013,171131217,10/8/2013,385,9.33,6.92,3592.05,2664.20,927.85\r\nSub-Saharan Africa,Botswana,Office Supplies,Online,C,1/5/2013,256158959,1/18/2013,1983,651.21,524.96,1291349.43,1040995.68,250353.75\r\nEurope,San Marino,Cosmetics,Online,H,10/28/2011,759504878,12/8/2011,3226,437.20,263.33,1410407.20,849502.58,560904.62\r\nMiddle East and North Africa,Oman,Fruits,Online,C,11/21/2010,960905301,11/25/2010,2087,9.33,6.92,19471.71,14442.04,5029.67\r\nAsia,Bangladesh,Office Supplies,Offline,C,10/28/2015,210409057,12/4/2015,3570,651.21,524.96,2324819.70,1874107.20,450712.50\r\nSub-Saharan Africa,Namibia,Cosmetics,Offline,C,7/29/2010,178377473,9/1/2010,4713,437.20,263.33,2060523.60,1241074.29,819449.31\r\nAsia,Mongolia,Fruits,Online,M,3/30/2014,805484378,5/1/2014,9582,9.33,6.92,89400.06,66307.44,23092.62\r\nAsia,North Korea,Beverages,Online,C,9/14/2016,752716100,10/12/2016,4276,47.45,31.79,202896.20,135934.04,66962.16\r\nEurope,Latvia,Clothes,Online,M,9/6/2012,551371467,9/15/2012,1925,109.28,35.84,210364.00,68992.00,141372.00\r\nSub-Saharan Africa,Burundi,Snacks,Offline,M,2/8/2013,353061807,3/5/2013,7689,152.58,97.44,1173187.62,749216.16,423971.46\r\nSub-Saharan Africa,Seychelles ,Personal Care,Online,C,1/17/2011,379710948,1/30/2011,3762,81.73,56.67,307468.26,213192.54,94275.72\r\nSub-Saharan Africa,Kenya,Cereal,Online,H,10/11/2015,473555219,11/6/2015,4368,205.70,117.11,898497.60,511536.48,386961.12\r\nSub-Saharan Africa,Benin,Office Supplies,Online,C,2/21/2011,547143447,2/23/2011,760,651.21,524.96,494919.60,398969.60,95950.00\r\nCentral America and the Caribbean,Saint Lucia,Personal Care,Online,C,4/29/2012,133336961,6/13/2012,6225,81.73,56.67,508769.25,352770.75,155998.50\r\nMiddle East and North Africa,Qatar,Meat,Online,H,8/30/2016,635309588,10/14/2016,1080,421.89,364.69,455641.20,393865.20,61776.00\r\nSub-Saharan Africa,Mozambique,Beverages,Online,C,12/20/2014,376547658,12/26/2014,7675,47.45,31.79,364178.75,243988.25,120190.50\r\nMiddle East and North Africa,Pakistan,Clothes,Offline,M,6/28/2010,450849997,7/21/2010,5388,109.28,35.84,588800.64,193105.92,395694.72\r\nAsia,Taiwan,Personal Care,Online,M,2/6/2015,672327935,2/6/2015,5631,81.73,56.67,460221.63,319108.77,141112.86\r\nCentral America and the Caribbean,Cuba,Cereal,Offline,L,3/30/2015,925405299,5/1/2015,6847,205.70,117.11,1408427.90,801852.17,606575.73\r\nCentral America and the Caribbean,Cuba,Household,Offline,H,7/28/2013,714818418,8/24/2013,9509,668.27,502.54,6354579.43,4778652.86,1575926.57\r\nEurope,Russia,Beverages,Offline,C,1/6/2010,515616118,2/5/2010,1122,47.45,31.79,53238.90,35668.38,17570.52\r\nEurope,Switzerland,Cereal,Offline,C,2/20/2013,423159730,4/11/2013,1222,205.70,117.11,251365.40,143108.42,108256.98\r\nEurope,Czech Republic,Personal Care,Offline,H,8/25/2013,603123080,9/29/2013,6377,81.73,56.67,521192.21,361384.59,159807.62\r\nEurope,Poland,Meat,Offline,C,11/16/2010,841492497,12/31/2010,5185,421.89,364.69,2187499.65,1890917.65,296582.00\r\nSub-Saharan Africa,Mauritius ,Cereal,Offline,L,8/2/2016,994566810,9/1/2016,3275,205.70,117.11,673667.50,383535.25,290132.25\r\nMiddle East and North Africa,Pakistan,Vegetables,Offline,M,4/25/2013,538957345,4/25/2013,8310,154.06,90.93,1280238.60,755628.30,524610.30\r\nSub-Saharan Africa,South Africa,Fruits,Offline,L,3/2/2011,821587932,3/11/2011,4981,9.33,6.92,46472.73,34468.52,12004.21\r\nSub-Saharan Africa,Seychelles ,Household,Online,C,9/28/2013,109694898,10/16/2013,13,668.27,502.54,8687.51,6533.02,2154.49\r\nSub-Saharan Africa,Benin,Meat,Offline,M,5/5/2014,340827071,6/5/2014,7159,421.89,364.69,3020310.51,2610815.71,409494.80\r\nSub-Saharan Africa,Benin,Meat,Offline,L,11/28/2014,372845780,12/9/2014,2207,421.89,364.69,931111.23,804870.83,126240.40\r\nCentral America and the Caribbean,Nicaragua,Fruits,Online,M,8/30/2014,933924853,9/13/2014,7973,9.33,6.92,74388.09,55173.16,19214.93\r\nMiddle East and North Africa,Lebanon,Office Supplies,Online,L,11/20/2013,572550618,11/25/2013,9306,651.21,524.96,6060160.26,4885277.76,1174882.50\r\nEurope,Moldova ,Meat,Online,M,2/23/2010,607521903,4/5/2010,8086,421.89,364.69,3411402.54,2948883.34,462519.20\r\nMiddle East and North Africa,Tunisia ,Snacks,Online,H,3/20/2017,177950036,4/29/2017,8225,152.58,97.44,1254970.50,801444.00,453526.50\r\nAustralia and Oceania,Vanuatu,Beverages,Offline,M,11/8/2015,293258845,11/14/2015,664,47.45,31.79,31506.80,21108.56,10398.24\r\nSub-Saharan Africa,South Sudan,Beverages,Online,C,8/9/2010,683184659,8/23/2010,8377,47.45,31.79,397488.65,266304.83,131183.82\r\nEurope,Sweden,Cereal,Online,L,11/12/2010,247776305,11/30/2010,1370,205.70,117.11,281809.00,160440.70,121368.30\r\nEurope,Ireland,Meat,Offline,C,12/14/2011,207395112,1/26/2012,1677,421.89,364.69,707509.53,611585.13,95924.40\r\nEurope,Italy,Vegetables,Offline,L,1/10/2014,952714908,2/25/2014,8367,154.06,90.93,1289020.02,760811.31,528208.71\r\nEurope,Bosnia and Herzegovina,Vegetables,Online,C,10/3/2010,694722020,10/3/2010,2539,154.06,90.93,391158.34,230871.27,160287.07\r\nEurope,Bosnia and Herzegovina,Household,Online,H,10/15/2015,414715278,11/4/2015,2321,668.27,502.54,1551054.67,1166395.34,384659.33\r\nEurope,Poland,Snacks,Offline,M,7/20/2013,714306008,8/17/2013,7876,152.58,97.44,1201720.08,767437.44,434282.64\r\nMiddle East and North Africa,Kuwait,Snacks,Online,H,1/19/2016,465418040,2/26/2016,6396,152.58,97.44,975901.68,623226.24,352675.44\r\nSub-Saharan Africa,Sudan,Cereal,Online,M,8/17/2013,860287702,9/11/2013,7103,205.70,117.11,1461087.10,831832.33,629254.77\r\nMiddle East and North Africa,Saudi Arabia,Vegetables,Online,C,8/16/2016,461463820,8/20/2016,6254,154.06,90.93,963491.24,568676.22,394815.02\r\nSub-Saharan Africa,Swaziland,Baby Food,Offline,M,9/25/2013,151807725,9/29/2013,2134,255.28,159.42,544767.52,340202.28,204565.24\r\nSub-Saharan Africa,Rwanda,Meat,Offline,C,8/21/2013,884493243,10/2/2013,61,421.89,364.69,25735.29,22246.09,3489.20\r\nAsia,Cambodia,Cosmetics,Offline,M,12/10/2010,533006703,1/23/2011,7383,437.20,263.33,3227847.60,1944165.39,1283682.21\r\nSub-Saharan Africa,Central African Republic,Vegetables,Online,C,9/4/2012,641146934,10/4/2012,8480,154.06,90.93,1306428.80,771086.40,535342.40\r\nAsia,Maldives,Cosmetics,Offline,M,10/15/2011,573025262,11/14/2011,9764,437.20,263.33,4268820.80,2571154.12,1697666.68\r\nSub-Saharan Africa,Djibouti,Household,Offline,C,8/26/2013,663065516,9/9/2013,4676,668.27,502.54,3124830.52,2349877.04,774953.48\r\nAsia,Tajikistan,Beverages,Online,M,2/17/2017,866004025,3/4/2017,8691,47.45,31.79,412387.95,276286.89,136101.06\r\nAsia,Sri Lanka,Baby Food,Online,H,10/19/2010,306889617,10/21/2010,4312,255.28,159.42,1100767.36,687419.04,413348.32\r\nEurope,Montenegro,Personal Care,Online,M,7/30/2014,431083619,8/10/2014,6077,81.73,56.67,496673.21,344383.59,152289.62\r\nMiddle East and North Africa,United Arab Emirates,Personal Care,Online,H,5/21/2015,954259860,6/4/2015,5553,81.73,56.67,453846.69,314688.51,139158.18\r\nCentral America and the Caribbean,Dominican Republic,Personal Care,Offline,C,5/5/2016,312404668,6/21/2016,6338,81.73,56.67,518004.74,359174.46,158830.28\r\nSub-Saharan Africa,Seychelles ,Office Supplies,Offline,C,4/14/2010,611816871,5/16/2010,9063,651.21,524.96,5901916.23,4757712.48,1144203.75\r\nEurope,Iceland,Office Supplies,Online,C,10/26/2013,879107797,11/2/2013,6388,651.21,524.96,4159929.48,3353444.48,806485.00\r\nSub-Saharan Africa,Nigeria,Vegetables,Offline,C,7/21/2010,211201274,9/9/2010,8005,154.06,90.93,1233250.30,727894.65,505355.65\r\nSub-Saharan Africa,Rwanda,Fruits,Online,H,6/9/2015,925333631,7/25/2015,5639,9.33,6.92,52611.87,39021.88,13589.99\r\nEurope,Hungary,Snacks,Offline,C,6/3/2010,909053695,6/27/2010,8044,152.58,97.44,1227353.52,783807.36,443546.16\r\nEurope,Belarus,Baby Food,Online,L,5/17/2016,370222795,6/11/2016,6007,255.28,159.42,1533466.96,957635.94,575831.02\r\nSub-Saharan Africa,South Sudan,Cosmetics,Offline,H,8/3/2013,487014758,8/30/2013,7344,437.20,263.33,3210796.80,1933895.52,1276901.28\r\nEurope,Andorra,Vegetables,Online,M,9/15/2013,257915914,10/6/2013,1905,154.06,90.93,293484.30,173221.65,120262.65\r\nAsia,Japan,Meat,Offline,M,7/2/2010,551725089,8/10/2010,6569,421.89,364.69,2771395.41,2395648.61,375746.80\r\nCentral America and the Caribbean,El Salvador,Meat,Offline,L,12/18/2013,957553613,1/10/2014,248,421.89,364.69,104628.72,90443.12,14185.60\r\nSub-Saharan Africa,Kenya,Office Supplies,Offline,L,3/19/2016,234825313,3/23/2016,8883,651.21,524.96,5784698.43,4663219.68,1121478.75\r\nEurope,Bosnia and Herzegovina,Snacks,Online,M,6/9/2010,363276517,7/9/2010,449,152.58,97.44,68508.42,43750.56,24757.86\r\nEurope,Andorra,Personal Care,Online,M,5/21/2017,692956054,6/23/2017,9950,81.73,56.67,813213.50,563866.50,249347.00\r\nSub-Saharan Africa,Cape Verde,Cosmetics,Online,H,6/12/2013,194225251,6/19/2013,4423,437.20,263.33,1933735.60,1164708.59,769027.01\r\nAustralia and Oceania,Nauru,Fruits,Online,L,2/22/2010,607757937,4/5/2010,7934,9.33,6.92,74024.22,54903.28,19120.94\r\nEurope,Czech Republic,Cereal,Offline,H,6/29/2012,594540441,7/30/2012,6583,205.70,117.11,1354123.10,770935.13,583187.97\r\nEurope,Serbia,Vegetables,Online,L,3/23/2015,685871589,4/5/2015,3500,154.06,90.93,539210.00,318255.00,220955.00\r\nAustralia and Oceania,Tuvalu,Cereal,Offline,C,2/12/2014,133362710,3/23/2014,3844,205.70,117.11,790710.80,450170.84,340539.96\r\nSub-Saharan Africa,Madagascar,Clothes,Offline,H,5/22/2017,958937633,7/5/2017,9810,109.28,35.84,1072036.80,351590.40,720446.40\r\nSub-Saharan Africa,Ethiopia,Vegetables,Online,C,8/6/2011,304832684,9/6/2011,5620,154.06,90.93,865817.20,511026.60,354790.60\r\nAsia,Malaysia,Baby Food,Offline,L,11/14/2010,783596694,12/24/2010,2530,255.28,159.42,645858.40,403332.60,242525.80\r\nSub-Saharan Africa,Tanzania,Household,Offline,C,4/5/2015,128090989,4/27/2015,3825,668.27,502.54,2556132.75,1922215.50,633917.25\r\nSub-Saharan Africa,Cote d'Ivoire,Vegetables,Offline,M,7/8/2014,641489398,7/28/2014,9823,154.06,90.93,1513331.38,893205.39,620125.99\r\nAustralia and Oceania,Solomon Islands,Clothes,Offline,M,8/9/2014,647278249,9/16/2014,2873,109.28,35.84,313961.44,102968.32,210993.12\r\nEurope,Netherlands,Clothes,Online,H,3/13/2011,339256370,3/31/2011,2354,109.28,35.84,257245.12,84367.36,172877.76\r\nSub-Saharan Africa,Mali,Baby Food,Offline,M,3/2/2016,431535089,3/19/2016,9677,255.28,159.42,2470344.56,1542707.34,927637.22\r\nMiddle East and North Africa,Afghanistan,Cereal,Offline,C,12/19/2015,808538234,1/16/2016,3286,205.70,117.11,675930.20,384823.46,291106.74\r\nEurope,Moldova ,Personal Care,Online,C,3/28/2013,975002133,4/7/2013,3653,81.73,56.67,298559.69,207015.51,91544.18\r\nAsia,Bhutan,Snacks,Online,H,6/27/2015,505975615,7/4/2015,8283,152.58,97.44,1263820.14,807095.52,456724.62\r\nAsia,Vietnam,Vegetables,Offline,M,2/18/2016,396820008,3/20/2016,6714,154.06,90.93,1034358.84,610504.02,423854.82\r\nEurope,Portugal,Vegetables,Online,H,6/14/2013,813209140,7/10/2013,5511,154.06,90.93,849024.66,501115.23,347909.43\r\nEurope,Spain,Baby Food,Online,M,5/10/2014,641129338,5/14/2014,3273,255.28,159.42,835531.44,521781.66,313749.78\r\nMiddle East and North Africa,Egypt,Meat,Offline,C,6/17/2015,636879432,7/3/2015,5632,421.89,364.69,2376084.48,2053934.08,322150.40\r\nEurope,Belgium,Snacks,Online,C,6/11/2014,277070748,7/2/2014,246,152.58,97.44,37534.68,23970.24,13564.44\r\nAsia,Malaysia,Cosmetics,Offline,H,11/3/2013,908627116,11/24/2013,1810,437.20,263.33,791332.00,476627.30,314704.70\r\nCentral America and the Caribbean,Dominican Republic,Cosmetics,Offline,C,4/2/2017,798784863,5/2/2017,7047,437.20,263.33,3080948.40,1855686.51,1225261.89\r\nEurope,Estonia,Beverages,Offline,H,5/28/2010,985092818,7/17/2010,9711,47.45,31.79,460786.95,308712.69,152074.26\r\nSub-Saharan Africa,Burundi,Snacks,Offline,C,5/22/2010,325412309,7/7/2010,5588,152.58,97.44,852617.04,544494.72,308122.32\r\nEurope,Latvia,Beverages,Online,M,6/2/2016,447917163,6/24/2016,7497,47.45,31.79,355732.65,238329.63,117403.02\r\nAsia,Tajikistan,Meat,Offline,M,8/22/2013,801093709,10/5/2013,285,421.89,364.69,120238.65,103936.65,16302.00\r\nSub-Saharan Africa,Zimbabwe,Fruits,Offline,H,10/5/2014,903740775,10/23/2014,5833,9.33,6.92,54421.89,40364.36,14057.53\r\nSub-Saharan Africa,Comoros,Meat,Offline,L,10/31/2010,794969689,11/13/2010,8052,421.89,364.69,3397058.28,2936483.88,460574.40\r\nSub-Saharan Africa,Namibia,Clothes,Online,L,11/27/2012,584204280,1/1/2013,7884,109.28,35.84,861563.52,282562.56,579000.96\r\nEurope,Slovenia,Cereal,Offline,H,5/22/2010,901180875,5/26/2010,8302,205.70,117.11,1707721.40,972247.22,735474.18\r\nEurope,Bulgaria,Snacks,Offline,L,8/31/2012,645948302,9/29/2012,9312,152.58,97.44,1420824.96,907361.28,513463.68\r\nSub-Saharan Africa,Guinea-Bissau,Cereal,Online,L,1/23/2015,138867890,2/22/2015,2950,205.70,117.11,606815.00,345474.50,261340.50\r\nSub-Saharan Africa,Lesotho,Beverages,Offline,L,3/2/2010,670613467,3/21/2010,8282,47.45,31.79,392980.90,263284.78,129696.12\r\nAsia,Sri Lanka,Cosmetics,Offline,L,5/9/2014,452171361,5/27/2014,6409,437.20,263.33,2802014.80,1687681.97,1114332.83\r\nAustralia and Oceania,East Timor,Snacks,Online,H,12/28/2010,464840400,2/5/2011,5459,152.58,97.44,832934.22,531924.96,301009.26\r\nEurope,Belarus,Household,Online,M,10/19/2014,410231912,10/24/2014,5594,668.27,502.54,3738302.38,2811208.76,927093.62\r\nSub-Saharan Africa,Benin,Meat,Offline,H,1/21/2015,960269725,2/22/2015,4006,421.89,364.69,1690091.34,1460948.14,229143.20\r\nEurope,Ireland,Beverages,Offline,L,4/4/2017,607190167,5/18/2017,9919,47.45,31.79,470656.55,315325.01,155331.54\r\nMiddle East and North Africa,Iran,Meat,Offline,H,8/5/2016,613542068,8/11/2016,9587,421.89,364.69,4044659.43,3496283.03,548376.40\r\nSub-Saharan Africa,Benin,Household,Offline,C,11/26/2016,962186753,1/12/2017,1297,668.27,502.54,866746.19,651794.38,214951.81\r\nSub-Saharan Africa,South Sudan,Beverages,Online,L,9/23/2011,806298053,10/24/2011,366,47.45,31.79,17366.70,11635.14,5731.56\r\nSub-Saharan Africa,Comoros,Personal Care,Online,L,10/24/2010,719362294,12/3/2010,4144,81.73,56.67,338689.12,234840.48,103848.64\r\nEurope,Poland,Baby Food,Online,H,8/14/2013,445178306,9/22/2013,7008,255.28,159.42,1789002.24,1117215.36,671786.88\r\nEurope,Bosnia and Herzegovina,Cosmetics,Offline,C,2/4/2013,247857415,2/15/2013,5372,437.20,263.33,2348638.40,1414608.76,934029.64\r\nSub-Saharan Africa,Namibia,Vegetables,Offline,C,8/11/2014,461823451,9/4/2014,2677,154.06,90.93,412418.62,243419.61,168999.01\r\nEurope,Spain,Office Supplies,Offline,C,1/12/2017,141812741,1/24/2017,4396,651.21,524.96,2862719.16,2307724.16,554995.00\r\nMiddle East and North Africa,Iran,Meat,Online,C,7/3/2016,212874114,8/17/2016,3036,421.89,364.69,1280858.04,1107198.84,173659.20\r\nCentral America and the Caribbean,Guatemala,Office Supplies,Offline,C,3/27/2010,320368897,4/2/2010,3131,651.21,524.96,2038938.51,1643649.76,395288.75\r\nAustralia and Oceania,East Timor,Beverages,Online,C,6/5/2015,179970920,6/25/2015,6249,47.45,31.79,296515.05,198655.71,97859.34\r\nMiddle East and North Africa,Bahrain,Household,Online,H,6/27/2012,927666509,7/17/2012,5990,668.27,502.54,4002937.30,3010214.60,992722.70\r\nSub-Saharan Africa,Ethiopia,Office Supplies,Online,L,12/19/2016,169754493,1/20/2017,2982,651.21,524.96,1941908.22,1565430.72,376477.50\r\nAustralia and Oceania,Solomon Islands,Personal Care,Offline,M,3/9/2015,532846200,4/20/2015,9886,81.73,56.67,807982.78,560239.62,247743.16\r\nCentral America and the Caribbean,Belize,Snacks,Online,C,6/18/2013,213865458,7/13/2013,6397,152.58,97.44,976054.26,623323.68,352730.58\r\nAsia,Sri Lanka,Office Supplies,Online,C,8/12/2011,630048596,9/3/2011,4236,651.21,524.96,2758525.56,2223730.56,534795.00\r\nCentral America and the Caribbean,Costa Rica,Clothes,Offline,H,4/17/2014,568944442,4/24/2014,2158,109.28,35.84,235826.24,77342.72,158483.52\r\nSub-Saharan Africa,Nigeria,Baby Food,Online,L,2/3/2012,238414323,2/27/2012,951,255.28,159.42,242771.28,151608.42,91162.86\r\nMiddle East and North Africa,Iran,Office Supplies,Online,L,8/1/2015,816632068,9/19/2015,8431,651.21,524.96,5490351.51,4425937.76,1064413.75\r\nSub-Saharan Africa,Djibouti,Baby Food,Online,C,9/11/2013,402084004,10/5/2013,4447,255.28,159.42,1135230.16,708940.74,426289.42\r\nAsia,South Korea,Snacks,Online,L,5/8/2015,763568961,6/7/2015,5879,152.58,97.44,897017.82,572849.76,324168.06\r\nCentral America and the Caribbean,Dominica,Snacks,Offline,L,5/22/2015,590198266,6/1/2015,1637,152.58,97.44,249773.46,159509.28,90264.18\r\nAsia,Vietnam,Snacks,Online,L,7/3/2013,441395747,8/19/2013,7665,152.58,97.44,1169525.70,746877.60,422648.10\r\nEurope,Norway,Personal Care,Offline,H,6/16/2010,496897733,7/21/2010,1936,81.73,56.67,158229.28,109713.12,48516.16\r\nCentral America and the Caribbean,Haiti,Beverages,Online,C,11/8/2011,106753051,11/14/2011,9455,47.45,31.79,448639.75,300574.45,148065.30\r\nCentral America and the Caribbean,Jamaica,Fruits,Offline,L,10/17/2016,941323029,10/27/2016,7258,9.33,6.92,67717.14,50225.36,17491.78\r\nSub-Saharan Africa,Sudan,Vegetables,Offline,M,2/2/2014,241281497,3/3/2014,9412,154.06,90.93,1450012.72,855833.16,594179.56\r\nSub-Saharan Africa,Angola,Meat,Offline,L,4/30/2016,267614781,5/12/2016,2016,421.89,364.69,850530.24,735215.04,115315.20\r\nCentral America and the Caribbean,Panama,Cosmetics,Offline,M,8/31/2010,651621711,10/16/2010,8200,437.20,263.33,3585040.00,2159306.00,1425734.00\r\nEurope,Greece,Personal Care,Online,M,8/8/2015,644913613,9/7/2015,3124,81.73,56.67,255324.52,177037.08,78287.44\r\nSub-Saharan Africa,Madagascar,Cereal,Offline,H,8/18/2016,469414317,8/19/2016,8983,205.70,117.11,1847803.10,1051999.13,795803.97\r\nSub-Saharan Africa,Guinea-Bissau,Clothes,Online,L,6/18/2015,867360150,7/1/2015,9998,109.28,35.84,1092581.44,358328.32,734253.12\r\nNorth America,Greenland,Clothes,Online,L,1/28/2011,851299941,2/1/2011,7425,109.28,35.84,811404.00,266112.00,545292.00\r\nMiddle East and North Africa,Libya,Beverages,Offline,H,2/4/2011,854095017,3/4/2011,4550,47.45,31.79,215897.50,144644.50,71253.00\r\nEurope,Belarus,Vegetables,Offline,C,11/3/2012,478919208,11/27/2012,1691,154.06,90.93,260515.46,153762.63,106752.83\r\nMiddle East and North Africa,Lebanon,Clothes,Offline,H,9/18/2014,749258840,11/5/2014,1196,109.28,35.84,130698.88,42864.64,87834.24\r\nSub-Saharan Africa,Djibouti,Baby Food,Offline,H,5/17/2012,958912742,6/28/2012,2444,255.28,159.42,623904.32,389622.48,234281.84\r\nCentral America and the Caribbean,Barbados,Personal Care,Online,C,2/20/2010,921992242,3/4/2010,6848,81.73,56.67,559687.04,388076.16,171610.88\r\nSub-Saharan Africa,Guinea-Bissau,Vegetables,Online,L,2/28/2017,522921168,3/2/2017,2849,154.06,90.93,438916.94,259059.57,179857.37\r\nEurope,Finland,Personal Care,Offline,C,5/17/2013,166435849,6/7/2013,921,81.73,56.67,75273.33,52193.07,23080.26\r\nCentral America and the Caribbean,Haiti,Baby Food,Offline,L,11/9/2013,327585113,11/23/2013,8569,255.28,159.42,2187494.32,1366069.98,821424.34\r\nSub-Saharan Africa,Niger,Clothes,Offline,M,1/10/2012,201730287,2/19/2012,5330,109.28,35.84,582462.40,191027.20,391435.20\r\nCentral America and the Caribbean,Trinidad and Tobago,Fruits,Offline,L,9/24/2013,854545199,11/9/2013,7769,9.33,6.92,72484.77,53761.48,18723.29\r\nCentral America and the Caribbean,Grenada,Personal Care,Online,M,9/26/2010,272016179,11/8/2010,4487,81.73,56.67,366722.51,254278.29,112444.22\r\nCentral America and the Caribbean,Dominican Republic,Cereal,Offline,H,10/21/2014,110442054,11/20/2014,1113,205.70,117.11,228944.10,130343.43,98600.67\r\nEurope,Monaco,Household,Offline,C,1/17/2016,746434152,2/5/2016,5308,668.27,502.54,3547177.16,2667482.32,879694.84\r\nEurope,Estonia,Vegetables,Online,L,12/27/2016,826916301,1/7/2017,1764,154.06,90.93,271761.84,160400.52,111361.32\r\nEurope,Italy,Beverages,Offline,H,8/30/2013,419124829,9/19/2013,7206,47.45,31.79,341924.70,229078.74,112845.96\r\nAsia,Malaysia,Office Supplies,Online,C,7/7/2014,560608565,8/24/2014,5387,651.21,524.96,3508068.27,2827959.52,680108.75\r\nSub-Saharan Africa,Ghana,Office Supplies,Offline,L,11/29/2013,109228837,12/7/2013,2095,651.21,524.96,1364284.95,1099791.20,264493.75\r\nMiddle East and North Africa,Pakistan,Clothes,Offline,C,1/29/2011,693159472,2/5/2011,146,109.28,35.84,15954.88,5232.64,10722.24\r\nAsia,Sri Lanka,Snacks,Offline,L,11/13/2013,860886800,11/23/2013,4390,152.58,97.44,669826.20,427761.60,242064.60\r\nEurope,Romania,Fruits,Offline,C,4/9/2012,131209647,5/3/2012,6705,9.33,6.92,62557.65,46398.60,16159.05\r\nMiddle East and North Africa,Qatar,Office Supplies,Online,H,6/28/2012,343239343,7/13/2012,1004,651.21,524.96,653814.84,527059.84,126755.00\r\nSub-Saharan Africa,Cote d'Ivoire,Clothes,Online,H,6/8/2010,706399714,7/19/2010,8228,109.28,35.84,899155.84,294891.52,604264.32\r\nMiddle East and North Africa,Egypt,Office Supplies,Online,M,8/23/2010,950427091,9/14/2010,1352,651.21,524.96,880435.92,709745.92,170690.00\r\nMiddle East and North Africa,Iran,Snacks,Offline,H,12/11/2014,875370299,12/28/2014,379,152.58,97.44,57827.82,36929.76,20898.06\r\nMiddle East and North Africa,Somalia,Clothes,Online,C,1/27/2011,801590669,3/15/2011,7347,109.28,35.84,802880.16,263316.48,539563.68\r\nMiddle East and North Africa,Syria,Personal Care,Offline,C,5/7/2014,219762027,5/28/2014,1322,81.73,56.67,108047.06,74917.74,33129.32\r\nAustralia and Oceania,Solomon Islands,Cereal,Offline,C,11/8/2010,940870702,11/21/2010,3404,205.70,117.11,700202.80,398642.44,301560.36\r\nCentral America and the Caribbean,Guatemala,Fruits,Online,M,3/30/2014,346215522,5/4/2014,1721,9.33,6.92,16056.93,11909.32,4147.61\r\nMiddle East and North Africa,Kuwait,Clothes,Offline,C,7/9/2016,837407815,7/20/2016,6436,109.28,35.84,703326.08,230666.24,472659.84\r\nMiddle East and North Africa,Jordan,Meat,Online,L,7/15/2014,386371409,7/19/2014,4741,421.89,364.69,2000180.49,1728995.29,271185.20\r\nAustralia and Oceania,Marshall Islands,Beverages,Offline,H,10/14/2013,185342633,11/24/2013,5859,47.45,31.79,278009.55,186257.61,91751.94\r\nMiddle East and North Africa,Egypt,Snacks,Offline,C,1/13/2017,596870315,2/18/2017,6045,152.58,97.44,922346.10,589024.80,333321.30\r\nEurope,Switzerland,Meat,Online,C,12/22/2012,703815782,1/7/2013,3585,421.89,364.69,1512475.65,1307413.65,205062.00\r\nAustralia and Oceania,Samoa ,Personal Care,Online,C,4/16/2010,559352862,6/4/2010,3797,81.73,56.67,310328.81,215175.99,95152.82\r\nEurope,Portugal,Cosmetics,Offline,C,2/27/2011,736967885,3/12/2011,4029,437.20,263.33,1761478.80,1060956.57,700522.23\r\nEurope,Albania,Clothes,Offline,C,1/14/2015,980459678,2/9/2015,8661,109.28,35.84,946474.08,310410.24,636063.84\r\nCentral America and the Caribbean,Dominica,Vegetables,Offline,C,11/16/2014,653939568,12/6/2014,4105,154.06,90.93,632416.30,373267.65,259148.65\r\nAustralia and Oceania,Tuvalu,Cosmetics,Online,H,1/17/2016,991831386,1/29/2016,3803,437.20,263.33,1662671.60,1001443.99,661227.61\r\nAustralia and Oceania,Marshall Islands,Cereal,Online,L,5/29/2017,148871457,7/6/2017,3227,205.70,117.11,663793.90,377913.97,285879.93\r\nEurope,Bulgaria,Fruits,Online,H,2/10/2015,850108611,2/25/2015,4884,9.33,6.92,45567.72,33797.28,11770.44\r\nSub-Saharan Africa,Niger,Office Supplies,Offline,M,12/8/2013,940904176,1/7/2014,3309,651.21,524.96,2154853.89,1737092.64,417761.25\r\nCentral America and the Caribbean,Saint Vincent and the Grenadines,Office Supplies,Offline,H,12/10/2015,136931979,12/13/2015,70,651.21,524.96,45584.70,36747.20,8837.50\r\nSub-Saharan Africa,Malawi,Beverages,Offline,L,9/4/2016,474178349,9/26/2016,8766,47.45,31.79,415946.70,278671.14,137275.56\r\nSub-Saharan Africa,Cape Verde,Personal Care,Offline,L,7/19/2016,458942115,7/29/2016,25,81.73,56.67,2043.25,1416.75,626.50\r\nCentral America and the Caribbean,Saint Vincent and the Grenadines,Beverages,Offline,C,1/9/2017,917834603,1/13/2017,6510,47.45,31.79,308899.50,206952.90,101946.60\r\nEurope,Greece,Personal Care,Offline,H,11/5/2016,947779643,12/5/2016,7913,81.73,56.67,646729.49,448429.71,198299.78\r\nEurope,Monaco,Clothes,Online,L,10/31/2015,166013562,11/26/2015,5957,109.28,35.84,650980.96,213498.88,437482.08\r\nSub-Saharan Africa,Nigeria,Beverages,Online,L,1/25/2011,960085189,2/13/2011,9397,47.45,31.79,445887.65,298730.63,147157.02\r\nEurope,Norway,Cosmetics,Offline,C,11/8/2015,837855851,11/8/2015,9020,437.20,263.33,3943544.00,2375236.60,1568307.40\r\nNorth America,Greenland,Snacks,Offline,L,6/24/2010,977499377,8/12/2010,2643,152.58,97.44,403268.94,257533.92,145735.02\r\nMiddle East and North Africa,Tunisia ,Beverages,Online,L,2/27/2014,377502095,3/3/2014,114,47.45,31.79,5409.30,3624.06,1785.24\r\nAsia,Uzbekistan,Meat,Offline,H,2/5/2013,806662833,3/27/2013,8313,421.89,364.69,3507171.57,3031667.97,475503.60\r\nCentral America and the Caribbean,Saint Kitts and Nevis ,Vegetables,Online,H,4/15/2017,954092919,5/11/2017,6152,154.06,90.93,947777.12,559401.36,388375.76\r\nCentral America and the Caribbean,Belize,Meat,Online,L,4/9/2011,479216182,4/26/2011,9572,421.89,364.69,4038331.08,3490812.68,547518.40\r\nSub-Saharan Africa,Angola,Personal Care,Online,H,12/13/2010,461768949,12/30/2010,6548,81.73,56.67,535168.04,371075.16,164092.88\r\nAsia,Bhutan,Meat,Online,C,5/13/2014,251800048,5/22/2014,2085,421.89,364.69,879640.65,760378.65,119262.00\r\nCentral America and the Caribbean,Honduras,Personal Care,Offline,L,1/16/2013,619670808,2/25/2013,3217,81.73,56.67,262925.41,182307.39,80618.02\r\nSub-Saharan Africa,South Sudan,Household,Offline,H,12/9/2010,606055057,1/23/2011,4014,668.27,502.54,2682435.78,2017195.56,665240.22\r\nAsia,Kyrgyzstan,Baby Food,Online,L,1/24/2013,671939122,2/14/2013,573,255.28,159.42,146275.44,91347.66,54927.78\r\nSub-Saharan Africa,Sao Tome and Principe,Cosmetics,Offline,M,2/25/2014,448621833,3/3/2014,6025,437.20,263.33,2634130.00,1586563.25,1047566.75\r\nSub-Saharan Africa,Madagascar,Fruits,Online,M,7/23/2017,987714517,9/11/2017,5530,9.33,6.92,51594.90,38267.60,13327.30\r\nSub-Saharan Africa,Senegal,Household,Online,H,5/7/2016,711141002,6/14/2016,1280,668.27,502.54,855385.60,643251.20,212134.40\r\nSub-Saharan Africa,Sierra Leone,Office Supplies,Online,C,3/24/2012,361137616,4/18/2012,7501,651.21,524.96,4884726.21,3937724.96,947001.25\r\nAsia,Malaysia,Household,Offline,H,10/3/2011,750253188,11/21/2011,5446,668.27,502.54,3639398.42,2736832.84,902565.58\r\nCentral America and the Caribbean,Cuba,Office Supplies,Online,C,12/22/2014,511349046,1/2/2015,8401,651.21,524.96,5470815.21,4410188.96,1060626.25\r\nSub-Saharan Africa,Zimbabwe,Personal Care,Offline,L,8/23/2011,147599017,8/28/2011,6684,81.73,56.67,546283.32,378782.28,167501.04\r\nEurope,Serbia,Beverages,Online,H,4/18/2015,682489430,5/23/2015,2644,47.45,31.79,125457.80,84052.76,41405.04\r\nAsia,Maldives,Vegetables,Offline,M,1/11/2014,509819114,2/23/2014,5660,154.06,90.93,871979.60,514663.80,357315.80\r\nEurope,Ireland,Office Supplies,Offline,M,2/27/2012,343699395,4/2/2012,7144,651.21,524.96,4652244.24,3750314.24,901930.00\r\nEurope,Romania,Clothes,Offline,L,4/4/2011,968554103,4/8/2011,5537,109.28,35.84,605083.36,198446.08,406637.28\r\nEurope,Croatia,Beverages,Online,M,12/26/2013,989119565,1/6/2014,1315,47.45,31.79,62396.75,41803.85,20592.90\r\nEurope,Albania,Vegetables,Offline,M,9/12/2012,880444610,10/31/2012,1980,154.06,90.93,305038.80,180041.40,124997.40\r\nCentral America and the Caribbean,Dominican Republic,Vegetables,Offline,L,12/19/2015,737890565,1/15/2016,7071,154.06,90.93,1089358.26,642966.03,446392.23\r\nSub-Saharan Africa,Zimbabwe,Vegetables,Online,M,6/26/2014,727131259,8/9/2014,3153,154.06,90.93,485751.18,286702.29,199048.89\r\nSub-Saharan Africa,Ghana,Office Supplies,Offline,L,3/2/2015,634153020,3/11/2015,8826,651.21,524.96,5747579.46,4633296.96,1114282.50\r\nAsia,Laos,Beverages,Online,H,8/17/2014,315254676,9/8/2014,9719,47.45,31.79,461166.55,308967.01,152199.54\r\nCentral America and the Caribbean,Panama,Personal Care,Offline,M,7/19/2010,147047555,9/3/2010,3494,81.73,56.67,285564.62,198004.98,87559.64\r\nSub-Saharan Africa,Angola,Household,Online,L,1/14/2013,576455485,2/13/2013,4843,668.27,502.54,3236431.61,2433801.22,802630.39\r\nMiddle East and North Africa,Syria,Snacks,Offline,L,7/19/2010,770714795,8/26/2010,490,152.58,97.44,74764.20,47745.60,27018.60\r\nSub-Saharan Africa,Sierra Leone,Cosmetics,Offline,H,7/11/2011,867374312,8/3/2011,4189,437.20,263.33,1831430.80,1103089.37,728341.43\r\nSub-Saharan Africa,Uganda,Fruits,Online,L,5/4/2010,624295365,6/23/2010,1727,9.33,6.92,16112.91,11950.84,4162.07\r\nAsia,Taiwan,Clothes,Offline,M,10/13/2013,769651782,11/3/2013,5921,109.28,35.84,647046.88,212208.64,434838.24\r\nMiddle East and North Africa,Azerbaijan,Vegetables,Online,C,7/27/2014,751929891,8/1/2014,1619,154.06,90.93,249423.14,147215.67,102207.47\r\nAsia,Maldives,Office Supplies,Online,H,4/4/2010,989928519,4/11/2010,702,651.21,524.96,457149.42,368521.92,88627.50\r\nSub-Saharan Africa,Mauritania,Meat,Offline,H,8/17/2014,622758996,10/1/2014,7081,421.89,364.69,2987403.09,2582369.89,405033.20\r\nSub-Saharan Africa,Burundi,Baby Food,Online,H,1/4/2016,659845149,1/29/2016,1698,255.28,159.42,433465.44,270695.16,162770.28\r\nSub-Saharan Africa,Zambia,Baby Food,Offline,H,5/17/2011,830923306,6/5/2011,7526,255.28,159.42,1921237.28,1199794.92,721442.36\r\nAsia,Singapore,Beverages,Offline,L,2/12/2010,936042296,3/17/2010,4571,47.45,31.79,216893.95,145312.09,71581.86\r\nSub-Saharan Africa,Ghana,Household,Online,L,2/17/2015,395563447,3/30/2015,4869,668.27,502.54,3253806.63,2446867.26,806939.37\r\nSub-Saharan Africa,Guinea,Meat,Offline,M,6/7/2011,500160586,6/7/2011,7487,421.89,364.69,3158690.43,2730434.03,428256.40\r\nSub-Saharan Africa,Zambia,Fruits,Online,L,5/26/2015,360820043,7/2/2015,3524,9.33,6.92,32878.92,24386.08,8492.84\r\nEurope,Georgia,Snacks,Online,C,5/24/2010,958840644,6/2/2010,1109,152.58,97.44,169211.22,108060.96,61150.26\r\nMiddle East and North Africa,Bahrain,Baby Food,Online,M,2/21/2011,195833718,4/7/2011,404,255.28,159.42,103133.12,64405.68,38727.44\r\nSub-Saharan Africa,Lesotho,Personal Care,Offline,M,6/28/2014,543723094,7/2/2014,8601,81.73,56.67,702959.73,487418.67,215541.06\r\nCentral America and the Caribbean,Barbados,Cosmetics,Offline,H,10/15/2010,494745099,10/30/2010,4924,437.20,263.33,2152772.80,1296636.92,856135.88\r\nMiddle East and North Africa,Saudi Arabia,Vegetables,Online,H,5/18/2010,411448562,6/30/2010,5628,154.06,90.93,867049.68,511754.04,355295.64\r\nEurope,Macedonia,Personal Care,Offline,H,2/2/2017,276694810,2/16/2017,8998,81.73,56.67,735406.54,509916.66,225489.88\r\nAsia,Turkmenistan,Office Supplies,Offline,M,11/24/2016,143657672,1/8/2017,352,651.21,524.96,229225.92,184785.92,44440.00\r\nEurope,Albania,Baby Food,Online,L,12/23/2011,585823476,1/6/2012,7040,255.28,159.42,1797171.20,1122316.80,674854.40\r\nMiddle East and North Africa,Afghanistan,Clothes,Online,C,12/5/2016,446991050,1/16/2017,3440,109.28,35.84,375923.20,123289.60,252633.60\r\nAustralia and Oceania,Kiribati,Clothes,Offline,M,2/16/2017,891271722,2/22/2017,5963,109.28,35.84,651636.64,213713.92,437922.72\r\nMiddle East and North Africa,Morocco,Cosmetics,Online,C,5/18/2010,453089320,6/16/2010,8053,437.20,263.33,3520771.60,2120596.49,1400175.11\r\nEurope,Norway,Baby Food,Offline,L,9/7/2010,887180173,10/18/2010,5183,255.28,159.42,1323116.24,826273.86,496842.38\r\nEurope,Sweden,Cosmetics,Online,L,3/12/2014,418593108,3/25/2014,9858,437.20,263.33,4309917.60,2595907.14,1714010.46\r\nAsia,Tajikistan,Personal Care,Online,M,7/16/2010,492689454,8/16/2010,6613,81.73,56.67,540480.49,374758.71,165721.78\r\nEurope,Netherlands,Cosmetics,Online,M,12/5/2016,825143039,12/20/2016,7017,437.20,263.33,3067832.40,1847786.61,1220045.79\r\nEurope,Spain,Vegetables,Online,L,10/8/2013,751940190,10/10/2013,4667,154.06,90.93,718998.02,424370.31,294627.71\r\nSub-Saharan Africa,Chad,Baby Food,Offline,H,8/9/2016,579379737,8/26/2016,194,255.28,159.42,49524.32,30927.48,18596.84\r\nEurope,Ireland,Meat,Online,C,10/6/2011,234073007,11/20/2011,6259,421.89,364.69,2640609.51,2282594.71,358014.80\r\nMiddle East and North Africa,Pakistan,Meat,Online,C,2/17/2013,612943828,3/1/2013,2554,421.89,364.69,1077507.06,931418.26,146088.80\r\nSub-Saharan Africa,Mozambique,Fruits,Online,C,12/14/2012,433228528,12/21/2012,804,9.33,6.92,7501.32,5563.68,1937.64\r\nMiddle East and North Africa,Bahrain,Fruits,Online,L,11/20/2015,282475936,11/28/2015,9762,9.33,6.92,91079.46,67553.04,23526.42\r\nAsia,Tajikistan,Meat,Online,M,7/7/2012,368547379,7/12/2012,214,421.89,364.69,90284.46,78043.66,12240.80\r\nAustralia and Oceania,New Zealand,Meat,Offline,H,6/2/2013,969616687,6/28/2013,9980,421.89,364.69,4210462.20,3639606.20,570856.00\r\nSub-Saharan Africa,Niger,Baby Food,Online,L,2/4/2015,184170186,2/17/2015,8906,255.28,159.42,2273523.68,1419794.52,853729.16\r\nEurope,Armenia,Fruits,Online,C,4/28/2011,681006705,6/14/2011,3872,9.33,6.92,36125.76,26794.24,9331.52\r\nSub-Saharan Africa,Gabon,Baby Food,Online,L,2/1/2012,249237573,2/21/2012,3791,255.28,159.42,967766.48,604361.22,363405.26\r\nAsia,Kyrgyzstan,Vegetables,Offline,H,1/29/2017,348286616,2/13/2017,4604,154.06,90.93,709292.24,418641.72,290650.52\r\nAustralia and Oceania,Fiji,Clothes,Offline,L,12/1/2011,257890164,12/29/2011,4285,109.28,35.84,468264.80,153574.40,314690.40\r\nEurope,Romania,Cosmetics,Online,H,5/8/2017,228097045,6/17/2017,7839,437.20,263.33,3427210.80,2064243.87,1362966.93\r\nSub-Saharan Africa,Botswana,Cereal,Online,C,5/3/2017,129268586,6/21/2017,2302,205.70,117.11,473521.40,269587.22,203934.18\r\nAustralia and Oceania,Fiji,Cosmetics,Online,M,10/31/2015,802078616,12/9/2015,1741,437.20,263.33,761165.20,458457.53,302707.67\r\nEurope,Vatican City,Clothes,Offline,C,4/11/2010,907513463,4/19/2010,2256,109.28,35.84,246535.68,80855.04,165680.64\r\nAsia,Thailand,Vegetables,Online,L,7/17/2010,976871955,8/31/2010,6975,154.06,90.93,1074568.50,634236.75,440331.75\r\nEurope,Belarus,Cereal,Offline,C,5/31/2012,261765420,7/17/2012,1060,205.70,117.11,218042.00,124136.60,93905.40\r\nAustralia and Oceania,Solomon Islands,Vegetables,Offline,L,7/15/2016,784117686,7/17/2016,6703,154.06,90.93,1032664.18,609503.79,423160.39\r\nAsia,China,Cosmetics,Offline,M,1/14/2017,586165082,1/27/2017,8128,437.20,263.33,3553561.60,2140346.24,1413215.36\r\nSub-Saharan Africa,Angola,Snacks,Online,C,11/26/2012,480456435,12/16/2012,6591,152.58,97.44,1005654.78,642227.04,363427.74\r\nAsia,Cambodia,Cereal,Online,L,10/3/2011,899853074,10/26/2011,5376,205.70,117.11,1105843.20,629583.36,476259.84\r\nCentral America and the Caribbean,Guatemala,Baby Food,Offline,L,11/30/2010,547528827,12/15/2010,4802,255.28,159.42,1225854.56,765534.84,460319.72\r\nSub-Saharan Africa,Namibia,Vegetables,Online,L,5/8/2016,446970021,5/9/2016,7217,154.06,90.93,1111851.02,656241.81,455609.21\r\nEurope,Serbia,Beverages,Offline,H,2/27/2016,791975486,3/20/2016,2001,47.45,31.79,94947.45,63611.79,31335.66\r\nMiddle East and North Africa,Turkey,Vegetables,Offline,M,8/24/2014,496656548,9/29/2014,564,154.06,90.93,86889.84,51284.52,35605.32\r\nMiddle East and North Africa,Pakistan,Vegetables,Offline,C,5/26/2013,345437037,6/30/2013,1351,154.06,90.93,208135.06,122846.43,85288.63\r\nEurope,Georgia,Vegetables,Offline,H,1/26/2015,743053281,2/23/2015,4833,154.06,90.93,744571.98,439464.69,305107.29\r\nAustralia and Oceania,Vanuatu,Snacks,Offline,L,1/7/2012,364554107,1/18/2012,8516,152.58,97.44,1299371.28,829799.04,469572.24\r\nEurope,Luxembourg,Cosmetics,Online,H,10/21/2012,205300843,12/3/2012,1937,437.20,263.33,846856.40,510070.21,336786.19\r\nMiddle East and North Africa,Saudi Arabia,Household,Online,M,9/16/2015,430967319,10/5/2015,1661,668.27,502.54,1109996.47,834718.94,275277.53\r\nAustralia and Oceania,Vanuatu,Meat,Offline,H,6/28/2012,827539861,7/1/2012,6289,421.89,364.69,2653266.21,2293535.41,359730.80\r\nCentral America and the Caribbean,Haiti,Snacks,Offline,H,12/2/2014,351317298,1/14/2015,1450,152.58,97.44,221241.00,141288.00,79953.00\r\nSub-Saharan Africa,Tanzania,Household,Offline,C,2/4/2013,278910958,2/4/2013,4805,668.27,502.54,3211037.35,2414704.70,796332.65\r\nAsia,North Korea,Cosmetics,Offline,C,2/17/2017,157244670,3/15/2017,1047,437.20,263.33,457748.40,275706.51,182041.89\r\nMiddle East and North Africa,Bahrain,Beverages,Online,L,6/24/2015,953554761,7/28/2015,6899,47.45,31.79,327357.55,219319.21,108038.34\r\nSub-Saharan Africa,Cote d'Ivoire,Cereal,Online,L,7/30/2016,105390059,8/25/2016,6115,205.70,117.11,1257855.50,716127.65,541727.85\r\nAsia,Singapore,Cosmetics,Offline,L,10/23/2014,970611894,11/10/2014,4483,437.20,263.33,1959967.60,1180508.39,779459.21\r\nAsia,Malaysia,Baby Food,Offline,M,12/16/2016,677394092,12/29/2016,4820,255.28,159.42,1230449.60,768404.40,462045.20\r\nEurope,Albania,Baby Food,Online,L,9/28/2015,474222981,10/26/2015,1973,255.28,159.42,503667.44,314535.66,189131.78\r\nSub-Saharan Africa,Gabon,Snacks,Online,L,4/16/2016,779897391,5/5/2016,7824,152.58,97.44,1193785.92,762370.56,431415.36\r\nEurope,Poland,Snacks,Offline,L,3/27/2017,733528649,3/30/2017,6283,152.58,97.44,958660.14,612215.52,346444.62\r\nSub-Saharan Africa,Chad,Office Supplies,Online,H,6/25/2014,444540584,8/2/2014,8292,651.21,524.96,5399833.32,4352968.32,1046865.00\r\nSub-Saharan Africa,Republic of the Congo,Clothes,Online,H,7/29/2012,542669522,9/11/2012,6826,109.28,35.84,745945.28,244643.84,501301.44\r\nAsia,Philippines,Fruits,Offline,L,5/4/2013,827964293,6/1/2013,1888,9.33,6.92,17615.04,13064.96,4550.08\r\nEurope,France,Snacks,Offline,M,2/2/2012,720786225,2/15/2012,5516,152.58,97.44,841631.28,537479.04,304152.24\r\nEurope,Germany,Household,Offline,H,7/24/2016,611809146,8/1/2016,6777,668.27,502.54,4528865.79,3405713.58,1123152.21\r\nSub-Saharan Africa,Uganda,Personal Care,Online,M,11/4/2012,512019383,12/12/2012,6769,81.73,56.67,553230.37,383599.23,169631.14\r\nMiddle East and North Africa,Bahrain,Personal Care,Online,C,8/5/2014,502715766,8/17/2014,3621,81.73,56.67,295944.33,205202.07,90742.26\r\nMiddle East and North Africa,Jordan,Office Supplies,Offline,M,10/22/2013,285509622,10/28/2013,7497,651.21,524.96,4882121.37,3935625.12,946496.25\r\nEurope,Montenegro,Beverages,Offline,L,12/1/2014,532324779,1/3/2015,5586,47.45,31.79,265055.70,177578.94,87476.76\r\nMiddle East and North Africa,Tunisia ,Personal Care,Offline,H,11/2/2015,635397565,11/21/2015,7114,81.73,56.67,581427.22,403150.38,178276.84\r\nEurope,Germany,Cereal,Offline,M,10/7/2011,957276809,11/4/2011,8335,205.70,117.11,1714509.50,976111.85,738397.65\r\nEurope,Italy,Snacks,Online,L,2/9/2014,580823838,3/21/2014,7536,152.58,97.44,1149842.88,734307.84,415535.04\r\nEurope,France,Office Supplies,Offline,H,5/29/2016,459212481,6/16/2016,33,651.21,524.96,21489.93,17323.68,4166.25\r\nMiddle East and North Africa,Algeria,Baby Food,Online,L,4/8/2013,265929067,5/23/2013,3175,255.28,159.42,810514.00,506158.50,304355.50\r\nAsia,Myanmar,Beverages,Online,H,9/20/2011,644772422,10/26/2011,1343,47.45,31.79,63725.35,42693.97,21031.38\r\nEurope,France,Vegetables,Offline,C,4/12/2012,959853875,5/4/2012,947,154.06,90.93,145894.82,86110.71,59784.11\r\nEurope,Spain,Vegetables,Online,C,10/2/2012,645597255,10/25/2012,5429,154.06,90.93,836391.74,493658.97,342732.77\r\nAsia,Cambodia,Baby Food,Offline,C,1/2/2012,556738889,1/25/2012,264,255.28,159.42,67393.92,42086.88,25307.04\r\nSub-Saharan Africa,The Gambia,Vegetables,Online,M,9/30/2013,718327605,11/10/2013,7956,154.06,90.93,1225701.36,723439.08,502262.28\r\nEurope,Russia,Baby Food,Offline,L,3/10/2015,775724732,3/20/2015,3041,255.28,159.42,776306.48,484796.22,291510.26\r\nEurope,Belarus,Baby Food,Offline,H,10/26/2010,444604098,10/31/2010,7088,255.28,159.42,1809424.64,1129968.96,679455.68\r\nMiddle East and North Africa,Turkey,Beverages,Online,C,5/2/2011,860952031,5/13/2011,3693,47.45,31.79,175232.85,117400.47,57832.38\r\nSub-Saharan Africa,Kenya,Meat,Offline,C,2/19/2017,531067359,2/20/2017,3488,421.89,364.69,1471552.32,1272038.72,199513.60\r\nMiddle East and North Africa,Iran,Cosmetics,Offline,M,7/20/2014,281561410,8/2/2014,9133,437.20,263.33,3992947.60,2404992.89,1587954.71\r\nAsia,Vietnam,Personal Care,Offline,L,6/18/2017,109358012,7/10/2017,321,81.73,56.67,26235.33,18191.07,8044.26\r\nEurope,Albania,Beverages,Online,L,7/19/2010,531693494,8/6/2010,8775,47.45,31.79,416373.75,278957.25,137416.50\r\nCentral America and the Caribbean,Antigua and Barbuda ,Clothes,Offline,C,8/9/2013,336116683,9/4/2013,3251,109.28,35.84,355269.28,116515.84,238753.44\r\nSub-Saharan Africa,Senegal,Cereal,Offline,M,3/23/2017,630488908,4/30/2017,4534,205.70,117.11,932643.80,530976.74,401667.06\r\nEurope,Netherlands,Fruits,Online,L,10/31/2016,792983996,12/2/2016,441,9.33,6.92,4114.53,3051.72,1062.81\r\nEurope,Russia,Fruits,Online,C,7/3/2016,722088277,7/3/2016,822,9.33,6.92,7669.26,5688.24,1981.02\r\nEurope,Slovakia,Cosmetics,Online,H,1/7/2010,386600577,1/29/2010,2557,437.20,263.33,1117920.40,673334.81,444585.59\r\nAustralia and Oceania,East Timor,Beverages,Offline,L,12/6/2014,275632226,1/18/2015,4556,47.45,31.79,216182.20,144835.24,71346.96\r\nCentral America and the Caribbean,Haiti,Vegetables,Offline,H,10/16/2015,948607051,11/27/2015,2761,154.06,90.93,425359.66,251057.73,174301.93\r\nMiddle East and North Africa,Yemen,Cereal,Online,H,5/10/2013,785261380,5/26/2013,5147,205.70,117.11,1058737.90,602765.17,455972.73\r\nAustralia and Oceania,Tuvalu,Cereal,Online,C,3/27/2013,935644042,5/15/2013,6719,205.70,117.11,1382098.30,786862.09,595236.21\r\nSub-Saharan Africa,Liberia,Snacks,Offline,M,7/13/2014,370116364,8/17/2014,4512,152.58,97.44,688440.96,439649.28,248791.68\r\nAsia,North Korea,Beverages,Online,C,8/16/2013,829352176,8/26/2013,2594,47.45,31.79,123085.30,82463.26,40622.04\r\nAsia,North Korea,Household,Online,M,7/14/2015,974337804,8/7/2015,7063,668.27,502.54,4719991.01,3549440.02,1170550.99\r\nEurope,Romania,Household,Online,H,12/23/2014,436372077,1/3/2015,1050,668.27,502.54,701683.50,527667.00,174016.50\r\nSub-Saharan Africa,Sao Tome and Principe,Cereal,Offline,M,4/27/2015,267066323,5/19/2015,9715,205.70,117.11,1998375.50,1137723.65,860651.85\r\nMiddle East and North Africa,Bahrain,Fruits,Online,M,3/14/2017,688344371,4/28/2017,5251,9.33,6.92,48991.83,36336.92,12654.91\r\nMiddle East and North Africa,Somalia,Cosmetics,Offline,M,10/2/2014,642442548,11/2/2014,1881,437.20,263.33,822373.20,495323.73,327049.47\r\nEurope,Cyprus,Cereal,Online,C,7/13/2014,941909682,8/1/2014,861,205.70,117.11,177107.70,100831.71,76275.99\r\nEurope,United Kingdom,Beverages,Offline,C,7/31/2016,219607102,8/13/2016,5477,47.45,31.79,259883.65,174113.83,85769.82\r\nEurope,Germany,Personal Care,Offline,H,8/30/2010,778708636,9/2/2010,6045,81.73,56.67,494057.85,342570.15,151487.70\r\nMiddle East and North Africa,Somalia,Beverages,Online,M,4/22/2010,942700612,6/6/2010,4915,47.45,31.79,233216.75,156247.85,76968.90\r\nAustralia and Oceania,New Zealand,Household,Offline,H,3/9/2011,905381858,4/8/2011,1466,668.27,502.54,979683.82,736723.64,242960.18\r\nMiddle East and North Africa,Kuwait,Meat,Online,C,1/13/2010,480863702,1/28/2010,7110,421.89,364.69,2999637.90,2592945.90,406692.00\r\nAsia,Japan,Cosmetics,Online,L,1/6/2016,453569972,2/19/2016,289,437.20,263.33,126350.80,76102.37,50248.43\r\nEurope,Norway,Baby Food,Offline,H,8/17/2016,328236997,9/10/2016,1476,255.28,159.42,376793.28,235303.92,141489.36\r\nSub-Saharan Africa,Lesotho,Personal Care,Offline,C,10/22/2011,579913604,10/23/2011,8177,81.73,56.67,668306.21,463390.59,204915.62\r\nEurope,Belgium,Cosmetics,Online,H,2/12/2010,403961122,3/20/2010,9928,437.20,263.33,4340521.60,2614340.24,1726181.36\r\nCentral America and the Caribbean,Honduras,Cosmetics,Offline,L,5/29/2017,866053378,6/22/2017,3295,437.20,263.33,1440574.00,867672.35,572901.65\r\nEurope,Austria,Household,Offline,C,4/17/2010,852176702,5/13/2010,6878,668.27,502.54,4596361.06,3456470.12,1139890.94\r\nMiddle East and North Africa,Oman,Baby Food,Online,M,9/8/2015,218629920,10/20/2015,6307,255.28,159.42,1610050.96,1005461.94,604589.02\r\nMiddle East and North Africa,Oman,Baby Food,Offline,C,2/13/2016,242024362,3/17/2016,9242,255.28,159.42,2359297.76,1473359.64,885938.12\r\nEurope,Spain,Snacks,Offline,M,2/16/2014,469283854,2/16/2014,376,152.58,97.44,57370.08,36637.44,20732.64\r\nMiddle East and North Africa,Afghanistan,Fruits,Online,C,4/22/2013,967644727,4/30/2013,6433,9.33,6.92,60019.89,44516.36,15503.53\r\nCentral America and the Caribbean,Saint Vincent and the Grenadines,Cosmetics,Offline,L,7/15/2014,974655807,7/23/2014,1167,437.20,263.33,510212.40,307306.11,202906.29\r\nEurope,Iceland,Vegetables,Online,M,3/7/2012,248178422,3/22/2012,365,154.06,90.93,56231.90,33189.45,23042.45\r\nAsia,Myanmar,Vegetables,Offline,L,1/14/2013,416386401,2/16/2013,6844,154.06,90.93,1054386.64,622324.92,432061.72\r\nEurope,Netherlands,Snacks,Offline,L,5/22/2017,927766072,6/20/2017,5453,152.58,97.44,832018.74,531340.32,300678.42\r\nEurope,Slovakia,Vegetables,Online,M,3/23/2015,401116263,3/31/2015,8071,154.06,90.93,1243418.26,733896.03,509522.23\r\nMiddle East and North Africa,Bahrain,Fruits,Offline,H,9/28/2012,675548303,11/6/2012,8610,9.33,6.92,80331.30,59581.20,20750.10\r\nSub-Saharan Africa,Lesotho,Baby Food,Online,L,6/6/2013,960486018,7/4/2013,8012,255.28,159.42,2045303.36,1277273.04,768030.32\r\nCentral America and the Caribbean,Cuba,Clothes,Offline,L,4/2/2014,985665738,5/19/2014,9250,109.28,35.84,1010840.00,331520.00,679320.00\r\nMiddle East and North Africa,Afghanistan,Clothes,Offline,C,1/13/2017,551136291,1/13/2017,2331,109.28,35.84,254731.68,83543.04,171188.64\r\nAustralia and Oceania,Vanuatu,Cereal,Online,L,2/3/2017,877259004,2/16/2017,9289,205.70,117.11,1910747.30,1087834.79,822912.51\r\nAsia,Bhutan,Beverages,Offline,M,8/5/2014,554707705,9/19/2014,9192,47.45,31.79,436160.40,292213.68,143946.72\r\nAustralia and Oceania,Palau,Cereal,Offline,L,10/6/2010,494468724,10/23/2010,3139,205.70,117.11,645692.30,367608.29,278084.01\r\nAsia,Indonesia,Personal Care,Online,H,9/10/2011,777840888,10/23/2011,9259,81.73,56.67,756738.07,524707.53,232030.54\r\nEurope,Andorra,Baby Food,Offline,C,12/12/2016,206435525,1/27/2017,7714,255.28,159.42,1969229.92,1229765.88,739464.04\r\nMiddle East and North Africa,Algeria,Office Supplies,Online,C,10/26/2015,352176463,12/5/2015,5696,651.21,524.96,3709292.16,2990172.16,719120.00\r\nAustralia and Oceania,Vanuatu,Cosmetics,Offline,C,10/14/2013,607300031,10/14/2013,2429,437.20,263.33,1061958.80,639628.57,422330.23\r\nNorth America,Mexico,Baby Food,Online,H,8/17/2013,434355056,9/28/2013,4168,255.28,159.42,1064007.04,664462.56,399544.48\r\nEurope,Macedonia,Fruits,Offline,M,8/7/2011,716202867,9/20/2011,9199,9.33,6.92,85826.67,63657.08,22169.59\r\nCentral America and the Caribbean,Panama,Personal Care,Online,H,5/22/2016,606017291,6/12/2016,2838,81.73,56.67,231949.74,160829.46,71120.28\r\nAsia,Nepal,Cereal,Offline,H,1/13/2015,677284657,1/15/2015,2436,205.70,117.11,501085.20,285279.96,215805.24\r\nAsia,Nepal,Fruits,Online,C,7/22/2014,673803794,7/29/2014,2371,9.33,6.92,22121.43,16407.32,5714.11\r\nSub-Saharan Africa,Mauritius ,Cereal,Offline,C,6/25/2015,859686028,7/10/2015,9055,205.70,117.11,1862613.50,1060431.05,802182.45\r\nSub-Saharan Africa,Sao Tome and Principe,Clothes,Online,H,8/10/2015,669355189,9/26/2015,5930,109.28,35.84,648030.40,212531.20,435499.20\r\nCentral America and the Caribbean,Saint Vincent and the Grenadines,Fruits,Offline,L,10/19/2013,957547605,11/21/2013,8470,9.33,6.92,79025.10,58612.40,20412.70\r\nAsia,Maldives,Personal Care,Online,M,10/9/2013,849312102,11/23/2013,9180,81.73,56.67,750281.40,520230.60,230050.80\r\nSub-Saharan Africa,Swaziland,Personal Care,Offline,H,9/26/2012,890010011,10/14/2012,2595,81.73,56.67,212089.35,147058.65,65030.70\r\nMiddle East and North Africa,Morocco,Cereal,Online,H,10/2/2012,795315158,10/26/2012,284,205.70,117.11,58418.80,33259.24,25159.56\r\nAsia,Maldives,Clothes,Offline,M,12/11/2016,801213872,1/28/2017,5844,109.28,35.84,638632.32,209448.96,429183.36\r\nSub-Saharan Africa,Zimbabwe,Fruits,Offline,C,7/26/2010,314004981,8/9/2010,9907,9.33,6.92,92432.31,68556.44,23875.87\r\nAsia,India,Cereal,Online,C,3/27/2010,160299813,4/6/2010,5132,205.70,117.11,1055652.40,601008.52,454643.88\r\nAsia,Tajikistan,Beverages,Offline,C,9/11/2014,337022197,9/22/2014,1212,47.45,31.79,57509.40,38529.48,18979.92\r\nSub-Saharan Africa,Lesotho,Snacks,Offline,M,3/9/2016,461408460,3/15/2016,9872,152.58,97.44,1506269.76,961927.68,544342.08\r\nAsia,Bhutan,Office Supplies,Offline,M,10/19/2011,221007430,11/10/2011,9865,651.21,524.96,6424186.65,5178730.40,1245456.25\r\nCentral America and the Caribbean,Trinidad and Tobago,Snacks,Offline,L,10/31/2014,723680436,12/20/2014,1978,152.58,97.44,301803.24,192736.32,109066.92\r\nAustralia and Oceania,Tuvalu,Fruits,Offline,L,2/23/2013,447601306,3/11/2013,4028,9.33,6.92,37581.24,27873.76,9707.48\r\nMiddle East and North Africa,Iraq,Clothes,Offline,L,10/25/2010,191256368,11/9/2010,5864,109.28,35.84,640817.92,210165.76,430652.16\r\nSub-Saharan Africa,The Gambia,Vegetables,Offline,L,10/4/2016,823444449,10/30/2016,4366,154.06,90.93,672625.96,397000.38,275625.58\r\nMiddle East and North Africa,Bahrain,Beverages,Online,C,9/4/2010,133276879,10/17/2010,8445,47.45,31.79,400715.25,268466.55,132248.70\r\nMiddle East and North Africa,Qatar,Meat,Online,H,12/22/2014,480177485,2/7/2015,4043,421.89,364.69,1705701.27,1474441.67,231259.60\r\nSub-Saharan Africa,Angola,Household,Offline,H,4/8/2015,243882596,5/11/2015,9135,668.27,502.54,6104646.45,4590702.90,1513943.55\r\nCentral America and the Caribbean,Costa Rica,Cosmetics,Online,L,3/2/2017,574441039,4/6/2017,8724,437.20,263.33,3814132.80,2297290.92,1516841.88\r\nAustralia and Oceania,Papua New Guinea,Household,Online,M,3/14/2012,442214143,5/3/2012,9847,668.27,502.54,6580454.69,4948511.38,1631943.31\r\nMiddle East and North Africa,Qatar,Clothes,Offline,C,11/22/2011,687875735,12/2/2011,6571,109.28,35.84,718078.88,235504.64,482574.24\r\nCentral America and the Caribbean,Saint Kitts and Nevis ,Clothes,Offline,H,9/8/2013,872412145,9/25/2013,4995,109.28,35.84,545853.60,179020.80,366832.80\r\nSub-Saharan Africa,Sierra Leone,Fruits,Offline,C,4/23/2012,627122199,4/29/2012,8250,9.33,6.92,76972.50,57090.00,19882.50\r\nEurope,Russia,Fruits,Online,M,2/14/2011,103617227,3/12/2011,1495,9.33,6.92,13948.35,10345.40,3602.95\r\nEurope,Lithuania,Vegetables,Offline,M,10/6/2010,423821055,10/22/2010,6923,154.06,90.93,1066557.38,629508.39,437048.99\r\nEurope,United Kingdom,Vegetables,Online,L,12/8/2012,529970014,1/3/2013,8759,154.06,90.93,1349411.54,796455.87,552955.67\r\nAsia,Indonesia,Personal Care,Offline,H,8/17/2016,334612929,10/3/2016,8256,81.73,56.67,674762.88,467867.52,206895.36\r\nAsia,Mongolia,Beverages,Offline,M,4/23/2014,270611131,5/24/2014,8702,47.45,31.79,412909.90,276636.58,136273.32\r\nMiddle East and North Africa,Egypt,Office Supplies,Online,C,11/18/2010,841138446,12/8/2010,413,651.21,524.96,268949.73,216808.48,52141.25\r\nSub-Saharan Africa,Comoros,Household,Online,M,4/22/2012,369681203,5/9/2012,5738,668.27,502.54,3834533.26,2883574.52,950958.74\r\nEurope,Slovenia,Household,Offline,M,4/5/2014,850038230,4/21/2014,4057,668.27,502.54,2711171.39,2038804.78,672366.61\r\nMiddle East and North Africa,Lebanon,Beverages,Online,M,6/21/2013,296320855,7/13/2013,6781,47.45,31.79,321758.45,215567.99,106190.46\r\nAustralia and Oceania,Australia,Cosmetics,Offline,L,7/13/2011,392952907,8/13/2011,2352,437.20,263.33,1028294.40,619352.16,408942.24\r\nCentral America and the Caribbean,Haiti,Snacks,Online,M,2/1/2011,644670712,3/21/2011,1245,152.58,97.44,189962.10,121312.80,68649.30\r\nCentral America and the Caribbean,Saint Kitts and Nevis ,Meat,Online,L,1/27/2012,626523101,2/16/2012,963,421.89,364.69,406280.07,351196.47,55083.60\r\nMiddle East and North Africa,Syria,Vegetables,Offline,M,6/24/2015,433871400,7/1/2015,1044,154.06,90.93,160838.64,94930.92,65907.72\r\nAsia,Laos,Snacks,Offline,M,1/3/2012,232389438,1/8/2012,8054,152.58,97.44,1228879.32,784781.76,444097.56\r\nCentral America and the Caribbean,Saint Kitts and Nevis ,Cereal,Offline,H,2/21/2016,708063542,3/19/2016,592,205.70,117.11,121774.40,69329.12,52445.28\r\nSub-Saharan Africa,Sudan,Vegetables,Offline,H,12/4/2016,817192542,12/22/2016,4288,154.06,90.93,660609.28,389907.84,270701.44\r\nCentral America and the Caribbean,Guatemala,Meat,Offline,H,1/16/2012,936387765,2/29/2012,6803,421.89,364.69,2870117.67,2480986.07,389131.60\r\nAsia,Brunei,Clothes,Offline,H,8/6/2011,612573039,8/9/2011,2830,109.28,35.84,309262.40,101427.20,207835.20\r\nMiddle East and North Africa,Jordan,Clothes,Online,M,8/12/2011,812984693,8/22/2011,9092,109.28,35.84,993573.76,325857.28,667716.48\r\nCentral America and the Caribbean,Panama,Meat,Offline,C,12/18/2012,775171554,1/5/2013,9344,421.89,364.69,3942140.16,3407663.36,534476.80\r\nSub-Saharan Africa,Central African Republic,Household,Online,H,1/10/2010,256994950,2/19/2010,9372,668.27,502.54,6263026.44,4709804.88,1553221.56\r\nMiddle East and North Africa,Bahrain,Beverages,Offline,M,2/28/2017,886628711,3/31/2017,1993,47.45,31.79,94567.85,63357.47,31210.38\r\nSub-Saharan Africa,Burundi,Beverages,Online,C,12/8/2011,312559163,12/16/2011,2057,47.45,31.79,97604.65,65392.03,32212.62\r\nEurope,Austria,Cereal,Online,L,8/18/2014,753585135,9/13/2014,1443,205.70,117.11,296825.10,168989.73,127835.37\r\nAustralia and Oceania,Fiji,Beverages,Offline,H,4/19/2016,448817956,4/22/2016,4062,47.45,31.79,192741.90,129130.98,63610.92\r\nAustralia and Oceania,Fiji,Clothes,Offline,M,11/6/2012,407681453,12/24/2012,856,109.28,35.84,93543.68,30679.04,62864.64\r\nEurope,Switzerland,Snacks,Online,H,5/27/2016,359911954,6/23/2016,4800,152.58,97.44,732384.00,467712.00,264672.00\r\nMiddle East and North Africa,Yemen,Office Supplies,Offline,M,8/18/2013,105558288,8/19/2013,5898,651.21,524.96,3840836.58,3096214.08,744622.50\r\nSub-Saharan Africa,Comoros,Personal Care,Offline,H,12/31/2014,864981782,2/11/2015,6186,81.73,56.67,505581.78,350560.62,155021.16\r\nSub-Saharan Africa,Democratic Republic of the Congo,Office Supplies,Online,C,2/4/2013,328856265,2/12/2013,4732,651.21,524.96,3081525.72,2484110.72,597415.00\r\nAsia,Mongolia,Clothes,Offline,H,9/23/2016,308168065,10/18/2016,2633,109.28,35.84,287734.24,94366.72,193367.52\r\nAustralia and Oceania,Palau,Household,Offline,L,11/1/2016,884216010,11/2/2016,8021,668.27,502.54,5360193.67,4030873.34,1329320.33\r\nEurope,Monaco,Snacks,Offline,M,12/27/2012,858611428,1/9/2013,1057,152.58,97.44,161277.06,102994.08,58282.98\r\nAustralia and Oceania,Fiji,Cereal,Online,L,3/10/2017,903278148,4/3/2017,8932,205.70,117.11,1837312.40,1046026.52,791285.88\r\nSub-Saharan Africa,Mali,Beverages,Online,L,3/17/2012,410452497,3/26/2012,870,47.45,31.79,41281.50,27657.30,13624.20\r\nSub-Saharan Africa,Liberia,Cereal,Offline,H,12/17/2015,642683303,1/20/2016,3126,205.70,117.11,643018.20,366085.86,276932.34\r\nEurope,Switzerland,Beverages,Offline,L,2/18/2017,682831895,3/16/2017,3987,47.45,31.79,189183.15,126746.73,62436.42\r\nAustralia and Oceania,Samoa ,Baby Food,Online,L,11/5/2016,584072101,11/5/2016,8769,255.28,159.42,2238550.32,1397953.98,840596.34\r\nAsia,Nepal,Meat,Offline,C,4/9/2017,919890248,5/18/2017,4821,421.89,364.69,2033931.69,1758170.49,275761.20\r\nMiddle East and North Africa,Azerbaijan,Snacks,Offline,C,4/18/2010,534085166,4/25/2010,6524,152.58,97.44,995431.92,635698.56,359733.36\r\nEurope,Georgia,Baby Food,Offline,H,8/1/2011,590768182,9/7/2011,288,255.28,159.42,73520.64,45912.96,27607.68\r\nMiddle East and North Africa,United Arab Emirates,Vegetables,Online,C,5/12/2011,524363124,6/28/2011,9556,154.06,90.93,1472197.36,868927.08,603270.28\r\nEurope,Finland,Household,Offline,L,1/25/2016,289606320,2/14/2016,9801,668.27,502.54,6549714.27,4925394.54,1624319.73\r\nEurope,Portugal,Cereal,Offline,C,4/10/2014,811546599,5/8/2014,3528,205.70,117.11,725709.60,413164.08,312545.52\r\n";

    var nodata = [
        { 'Amount': 100, 'Country': "Canada", 'Date': "FY 2005", 'Product': "Bike", 'Quantity': 2, 'State': "Alberta" },
        { 'Amount': 200, 'Country': "Canada", 'Date': "FY 2006", 'Product': "Van", 'Quantity': 3, 'State': "British Columbia" },
        { 'Amount': 150, 'Country': "United States", 'Date': "FY 2006", 'Product': "Car", 'Quantity': 3, 'State': "New Mexico" },
        { 'Amount': 200, 'Country': "United States", 'Date': "FY 2005", 'Product': "Bike", 'Quantity': 4, 'State': "New York" }
    ];

    var pivotNullData = [
        { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
        { Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
        { Amount: 300, Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
        { Amount: 150, Country: "Canada", Product: "Bike", Quantity: 3, State: "Manitoba" },
        { Amount: 200, Country: "Canada", Date: "FY 2006", Quantity: 4, State: "Ontario" },
        { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", State: "Quebec" },
        { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2 },
        { Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
        { Amount: 300, Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
        { Amount: 150, Country: "France", Product: "Van", Quantity: 2, State: "Gers" },
        { Amount: 200, Country: "Germany", Date: "FY 2006", Quantity: 3, State: "Bayern" },
        { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", State: "Brandenburg" },
        { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4 },
        { Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
        { Amount: 150, Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
        { Amount: 100, Country: "Germany", Product: "Bike", Quantity: 2, State: "Saarland" },
        { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Quantity: 5 },
        { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", State: "Alabama" },
        { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4 },
        { Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
        { Amount: 150, Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
        { Amount: 200, Country: "United States", Product: "Bike", Quantity: 4, State: "New York" },
        { Amount: 250, Country: "United States", Date: "FY 2008", Quantity: 3, State: "North Carolina" },
        { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", State: "South Carolina" }
      ];

    var gData = [
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 2
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 3
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 5
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 2
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 1
        },
        {
            'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 3
        },
        {
            'Date': '1/5/2015 20:19:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 3
        },
        {
            'Date': '2/2/2015 10:22:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 4
        },
        {
            'Date': '2/10/2015 10:23:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 1
        },
        {
            'Date': '1/5/2015 20:19:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 3
        },
        {
            'Date': '2/2/2015 10:22:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 2
        },
        {
            'Date': '2/10/2015 10:23:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1006,
            'Sold': 4
        },
        {
            'Date': '1/5/2015 20:19:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 8
        },
        {
            'Date': '2/2/2015 10:22:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 1
        },
        {
            'Date': '2/10/2015 10:23:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 6
        },
        {
            'Date': '2/20/2015 11:25:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 8
        },
        {
            'Date': '3/07/2015 05:11:50 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 4
        },
        {
            'Date': '3/13/2015 05:11:55 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 2
        },
        {
            'Date': '9/1/2015 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '9/1/2015 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 2
        },
        {
            'Date': '9/05/2015 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 10
        },
        {
            'Date': '9/12/2015 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 3
        },
        {
            'Date': '9/25/2015 04:15:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 2
        },
        {
            'Date': '9/29/2015 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 3
        },
        {
            'Date': '9/05/2015 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 2
        },
        {
            'Date': '9/12/2015 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 3
        },
        {
            'Date': '9/25/2015 04:15:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 2
        },
        {
            'Date': '9/29/2015 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 7
        },
        {
            'Date': '10/3/2015 18:11:47 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 1
        },
        {
            'Date': '1/3/2016 17:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 5
        },
        {
            'Date': '1/4/2016 15:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 4
        },
        {
            'Date': '1/5/2016 17:30:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 3
        },
        {
            'Date': '1/8/2016 07:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 2
        },
        {
            'Date': '10/3/2015 18:11:47 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/3/2016 17:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '1/4/2016 15:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/5/2016 17:30:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/8/2016 07:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1006,
            'Sold': 1
        },
        {
            'Date': '1/10/2016 17:26:25 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 7
        },
        {
            'Date': '2/11/2016 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 3
        },
        {
            'Date': '2/12/2016 19:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 2
        },
        {
            'Date': '2/19/2016 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 5
        },
        {
            'Date': '3/20/2016 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 1
        },
        {
            'Date': '2/19/2016 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1006,
            'Sold': 1
        },
        {
            'Date': '3/20/2016 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 5
        },
        {
            'Date': '3/23/2016 05:33:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 4
        },
        {
            'Date': '3/06/2016 06:31:20 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '5/04/2016 21:41:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '5/11/2016 21:45:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 5
        },
        {
            'Date': '3/20/2016 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 4
        },
        {
            'Date': '2/19/2016 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 2
        },
        {
            'Date': '3/20/2016 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 1
        },
        {
            'Date': '3/23/2016 05:33:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 1
        },
        {
            'Date': '3/06/2016 06:31:20 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '5/04/2016 21:41:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '5/11/2016 21:45:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 2
        },
        {
            'Date': '6/17/2016 07:09:27 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 4
        },
        {
            'Date': '7/1/2016 03:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 2
        },
        {
            'Date': '7/2/2016 05:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 5
        },
        {
            'Date': '9/8/2016 11:50:17 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 2
        },
        {
            'Date': '12/2/2016 16:05:33 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 1
        },
        {
            'Date': '6/17/2016 07:09:27 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 2
        },
        {
            'Date': '7/1/2016 03:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '7/2/2016 05:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 4
        },
        {
            'Date': '9/8/2016 11:50:17 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 2
        },
        {
            'Date': '12/2/2016 16:05:33 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 3
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 2
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 3
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 5
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 2
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 1
        },
        {
            'Date': '1/1/2017 20:18:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 3
        },
        {
            'Date': '1/5/2017 20:19:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 3
        },
        {
            'Date': '2/2/2017 10:22:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 4
        },
        {
            'Date': '2/10/2017 10:23:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 1
        },
        {
            'Date': '1/5/2017 20:19:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 3
        },
        {
            'Date': '2/2/2017 10:22:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 2
        },
        {
            'Date': '2/10/2017 10:23:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1006,
            'Sold': 4
        },
        {
            'Date': '1/5/2017 20:19:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 8
        },
        {
            'Date': '2/2/2017 10:22:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 1
        },
        {
            'Date': '2/10/2017 10:23:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 6
        },
        {
            'Date': '2/20/2017 11:25:07 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 8
        },
        {
            'Date': '3/07/2017 05:11:50 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 4
        },
        {
            'Date': '3/13/2017 05:11:55 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 2
        },
        {
            'Date': '9/1/2017 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '9/1/2017 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 2
        },
        {
            'Date': '9/05/2017 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 10
        },
        {
            'Date': '9/12/2017 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 3
        },
        {
            'Date': '9/25/2017 04:15:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 2
        },
        {
            'Date': '9/29/2017 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 3
        },
        {
            'Date': '9/05/2017 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 2
        },
        {
            'Date': '9/12/2017 04:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 3
        },
        {
            'Date': '9/25/2017 04:15:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 2
        },
        {
            'Date': '9/29/2017 05:14:43 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 7
        },
        {
            'Date': '10/3/2017 18:11:47 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 1
        },
        {
            'Date': '1/3/2018 17:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 5
        },
        {
            'Date': '1/4/2018 15:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 4
        },
        {
            'Date': '1/5/2018 17:30:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 3
        },
        {
            'Date': '1/8/2018 07:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 2
        },
        {
            'Date': '10/3/2017 18:11:47 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/3/2018 17:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '1/4/2018 15:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/5/2018 17:30:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '1/8/2018 07:26:11 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1006,
            'Sold': 1
        },
        {
            'Date': '1/10/2018 17:26:25 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 7
        },
        {
            'Date': '2/11/2018 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 3
        },
        {
            'Date': '2/12/2018 19:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 2
        },
        {
            'Date': '2/19/2018 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 5
        },
        {
            'Date': '3/20/2018 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 1
        },
        {
            'Date': '2/19/2018 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1006,
            'Sold': 1
        },
        {
            'Date': '3/20/2018 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 5
        },
        {
            'Date': '3/23/2018 05:33:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 4
        },
        {
            'Date': '3/06/2018 06:31:20 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '5/04/2018 21:41:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '5/11/2018 21:45:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 5
        },
        {
            'Date': '3/20/2018 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 4
        },
        {
            'Date': '2/19/2018 18:51:14 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 2
        },
        {
            'Date': '3/20/2018 06:31:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 1
        },
        {
            'Date': '3/23/2018 05:33:12 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 1
        },
        {
            'Date': '3/06/2018 06:31:20 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '5/04/2018 21:41:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 1
        },
        {
            'Date': '5/11/2018 21:45:15 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1010,
            'Sold': 2
        },
        {
            'Date': '6/17/2018 07:09:27 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 4
        },
        {
            'Date': '7/1/2018 03:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1005,
            'Sold': 2
        },
        {
            'Date': '7/2/2018 05:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1007,
            'Sold': 5
        },
        {
            'Date': '9/8/2018 11:50:17 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1008,
            'Sold': 2
        },
        {
            'Date': '12/2/2018 16:05:33 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 1
        },
        {
            'Date': '6/17/2018 07:09:27 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1001,
            'Sold': 2
        },
        {
            'Date': '7/1/2018 03:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Bikes',
            'Product_ID': 1004,
            'Sold': 1
        },
        {
            'Date': '7/2/2018 05:47:38 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Clothings',
            'Product_ID': 1009,
            'Sold': 4
        },
        {
            'Date': '9/8/2018 11:50:17 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1002,
            'Sold': 2
        },
        {
            'Date': '12/2/2018 16:05:33 GMT+0530 (India Standard Time)',
            'Product_Categories': 'Accessories',
            'Product_ID': 1003,
            'Sold': 3
        }
    ];

    var Group_Data = getGroupData(gData);
    function getGroupData(data) {
        var date;
        var products = ['', 'Bottles and Cages', 'Cleaners', 'Fenders', 'Mountain Bikes', 'Road Bikes', 'Touring Bikes', 'Gloves', 'Jerseys', 'Shorts', 'Vests'];
        var amount = [0, 2, 3, 8, 60, 75, 65, 3, 5, 4, 2];
        for (var ln = 0, lt = data.length; ln < lt; ln++) {
            date = new Date(data[ln].Date.toString());
            data[ln].Date = date.toString();
            data[ln].Products = products[data[ln].Product_ID - 1000];
            data[ln].Sold = data[ln].Sold * (date.getFullYear() === 2015 ? 3 : date.getFullYear() === 2016 ? 4 : date.getFullYear() === 2017 ? 2 : 5);
            data[ln].Amount = ((date.getFullYear() === 2018 ? 2 : 0) + data[ln].Sold) * amount[data[ln].Product_ID - 1000];
        }
        return data;
    }

    var rData = [
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 43
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 30,
            'ProCost': 29
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 125,
            'ProCost': 96
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 215,
            'ProCost': 123
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 263,
            'ProCost': 125
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 61,
            'ProCost': 50
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 31
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 133,
            'ProCost': 110
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 65
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 37,
            'ProCost': 20
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 109,
            'ProCost': 96
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 266,
            'ProCost': 139
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 257,
            'ProCost': 143
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 79,
            'ProCost': 53
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 28,
            'ProCost': 48
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 128,
            'ProCost': 117
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 68,
            'ProCost': 48
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 26,
            'ProCost': 32
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 141,
            'ProCost': 98
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 281,
            'ProCost': 134
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 228,
            'ProCost': 107
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 73,
            'ProCost': 49
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 19,
            'ProCost': 44
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 149,
            'ProCost': 82
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 47,
            'ProCost': 58
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 25,
            'ProCost': 40
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 127,
            'ProCost': 93
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 216,
            'ProCost': 124
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 267,
            'ProCost': 100
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 52,
            'ProCost': 65
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 39,
            'ProCost': 33
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 142,
            'ProCost': 97
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 53,
            'ProCost': 49
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 44
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 113,
            'ProCost': 106
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 270,
            'ProCost': 101
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 284,
            'ProCost': 105
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 62,
            'ProCost': 43
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 32,
            'ProCost': 26
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 133,
            'ProCost': 83
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 51,
            'ProCost': 65
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 13,
            'ProCost': 25
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 139,
            'ProCost': 101
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 297,
            'ProCost': 130
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 236,
            'ProCost': 119
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 57,
            'ProCost': 66
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 16,
            'ProCost': 27
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 110,
            'ProCost': 93
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 55,
            'ProCost': 49
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 32,
            'ProCost': 39
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 128,
            'ProCost': 120
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 290,
            'ProCost': 128
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 201,
            'ProCost': 105
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 55,
            'ProCost': 46
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 37
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 122,
            'ProCost': 118
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 69,
            'ProCost': 54
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 21,
            'ProCost': 41
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 83
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 239,
            'ProCost': 121
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 283,
            'ProCost': 127
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 80,
            'ProCost': 40
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 33,
            'ProCost': 40
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 81
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 41,
            'ProCost': 69
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 14,
            'ProCost': 21
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 144,
            'ProCost': 93
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 294,
            'ProCost': 146
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 217,
            'ProCost': 103
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 49,
            'ProCost': 44
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 36,
            'ProCost': 21
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 118,
            'ProCost': 115
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 56,
            'ProCost': 41
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 17,
            'ProCost': 36
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 81
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 274,
            'ProCost': 109
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 284,
            'ProCost': 145
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 40,
            'ProCost': 49
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 12,
            'ProCost': 28
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 150,
            'ProCost': 115
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 73,
            'ProCost': 64
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 47
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 102,
            'ProCost': 112
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 252,
            'ProCost': 112
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 222,
            'ProCost': 131
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 52,
            'ProCost': 46
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 35,
            'ProCost': 30
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 104,
            'ProCost': 101
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 40
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 19,
            'ProCost': 31
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 118,
            'ProCost': 89
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 227,
            'ProCost': 130
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 226,
            'ProCost': 144
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 40,
            'ProCost': 52
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 19,
            'ProCost': 40
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 127,
            'ProCost': 91
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 70,
            'ProCost': 66
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 36,
            'ProCost': 21
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 144,
            'ProCost': 85
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 212,
            'ProCost': 130
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 210,
            'ProCost': 110
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 72,
            'ProCost': 56
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 13,
            'ProCost': 47
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 139,
            'ProCost': 98
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 59,
            'ProCost': 54
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 26,
            'ProCost': 21
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 97
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 299,
            'ProCost': 124
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 240,
            'ProCost': 110
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 71,
            'ProCost': 61
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 40,
            'ProCost': 33
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 134,
            'ProCost': 111
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 50
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 18,
            'ProCost': 25
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 139,
            'ProCost': 85
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 217,
            'ProCost': 141
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 252,
            'ProCost': 101
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 31,
            'ProCost': 42
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 15,
            'ProCost': 27
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 117,
            'ProCost': 112
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 34,
            'ProCost': 40
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 10,
            'ProCost': 43
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 110,
            'ProCost': 83
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 212,
            'ProCost': 137
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 222,
            'ProCost': 126
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 75,
            'ProCost': 49
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 37
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 105,
            'ProCost': 98
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 72,
            'ProCost': 45
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 45
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 143,
            'ProCost': 92
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 272,
            'ProCost': 128
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 208,
            'ProCost': 136
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 48,
            'ProCost': 46
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 27
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 150,
            'ProCost': 100
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 60,
            'ProCost': 43
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 15,
            'ProCost': 27
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 107,
            'ProCost': 97
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 204,
            'ProCost': 136
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 210,
            'ProCost': 111
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 65,
            'ProCost': 47
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 26,
            'ProCost': 45
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 112,
            'ProCost': 115
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 54,
            'ProCost': 66
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 36
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 112
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 261,
            'ProCost': 149
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 226,
            'ProCost': 124
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 72,
            'ProCost': 63
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 35,
            'ProCost': 33
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 144,
            'ProCost': 118
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 293,
            'ProCost': 118
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 237,
            'ProCost': 110
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 36,
            'ProCost': 50
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 36
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 95
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 59
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 33
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 147,
            'ProCost': 96
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 230,
            'ProCost': 100
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 236,
            'ProCost': 104
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 60,
            'ProCost': 57
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 33,
            'ProCost': 41
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 105
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 31,
            'ProCost': 55
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 30
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 117,
            'ProCost': 106
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 259,
            'ProCost': 127
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 294,
            'ProCost': 126
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 51,
            'ProCost': 63
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 21,
            'ProCost': 45
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 102,
            'ProCost': 108
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 77,
            'ProCost': 64
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 29,
            'ProCost': 26
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 88
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 244,
            'ProCost': 144
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 213,
            'ProCost': 127
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 69,
            'ProCost': 40
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 30,
            'ProCost': 33
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 116,
            'ProCost': 103
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 79,
            'ProCost': 47
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 29,
            'ProCost': 37
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 116,
            'ProCost': 96
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 295,
            'ProCost': 108
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 225,
            'ProCost': 127
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 35,
            'ProCost': 57
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 37,
            'ProCost': 49
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 138,
            'ProCost': 118
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 80,
            'ProCost': 47
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 42
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 131,
            'ProCost': 91
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 240,
            'ProCost': 115
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 275,
            'ProCost': 109
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 42
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 40,
            'ProCost': 43
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 112,
            'ProCost': 105
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 35,
            'ProCost': 40
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 31
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 119,
            'ProCost': 87
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 298,
            'ProCost': 148
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 200,
            'ProCost': 107
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 30,
            'ProCost': 42
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 49
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 148,
            'ProCost': 88
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 37,
            'ProCost': 49
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 29
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 130,
            'ProCost': 102
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 281,
            'ProCost': 129
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 228,
            'ProCost': 113
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 80,
            'ProCost': 60
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 39,
            'ProCost': 27
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 119,
            'ProCost': 93
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 42,
            'ProCost': 46
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 18,
            'ProCost': 37
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 126,
            'ProCost': 96
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 222,
            'ProCost': 150
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 228,
            'ProCost': 105
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 54,
            'ProCost': 49
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 16,
            'ProCost': 33
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 145,
            'ProCost': 110
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 35,
            'ProCost': 41
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 16,
            'ProCost': 38
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 118,
            'ProCost': 114
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 241,
            'ProCost': 110
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 281,
            'ProCost': 136
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 50,
            'ProCost': 66
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 26
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 129,
            'ProCost': 98
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 78,
            'ProCost': 53
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 28,
            'ProCost': 31
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 147,
            'ProCost': 120
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 240,
            'ProCost': 100
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 232,
            'ProCost': 116
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 49
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 18,
            'ProCost': 36
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 114,
            'ProCost': 113
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 52,
            'ProCost': 63
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 25
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 129,
            'ProCost': 88
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 263,
            'ProCost': 111
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 241,
            'ProCost': 105
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 55,
            'ProCost': 60
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 13,
            'ProCost': 30
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 134,
            'ProCost': 107
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 69
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 31
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 146,
            'ProCost': 109
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 241,
            'ProCost': 107
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 10,
            'ProCost': 30
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 38,
            'ProCost': 65
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 6,
            'ProCost': 24
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 72,
            'ProCost': 86
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 13,
            'ProCost': 20
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 34,
            'ProCost': 54
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 5,
            'ProCost': 20
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 12,
            'ProCost': 26
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 48,
            'ProCost': 57
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 8,
            'ProCost': 29
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 61,
            'ProCost': 97
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 29
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 40,
            'ProCost': 47
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 27
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 24
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 45,
            'ProCost': 42
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 4,
            'ProCost': 25
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 72,
            'ProCost': 82
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 29
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 32,
            'ProCost': 42
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 5,
            'ProCost': 20
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 25
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 43,
            'ProCost': 66
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 8,
            'ProCost': 26
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 86,
            'ProCost': 87
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 16,
            'ProCost': 22
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 43,
            'ProCost': 54
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 6,
            'ProCost': 22
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 15,
            'ProCost': 20
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 40,
            'ProCost': 55
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 3,
            'ProCost': 24
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 60,
            'ProCost': 87
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 12,
            'ProCost': 29
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 37,
            'ProCost': 50
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 3,
            'ProCost': 20
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 17,
            'ProCost': 21
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 38,
            'ProCost': 53
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 8,
            'ProCost': 27
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 88,
            'ProCost': 92
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 14,
            'ProCost': 22
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 31,
            'ProCost': 69
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 2,
            'ProCost': 22
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 16,
            'ProCost': 29
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 35,
            'ProCost': 54
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 7,
            'ProCost': 24
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 79,
            'ProCost': 82
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 10,
            'ProCost': 29
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 50,
            'ProCost': 65
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 5,
            'ProCost': 25
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 17,
            'ProCost': 28
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 46,
            'ProCost': 54
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 7,
            'ProCost': 27
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 63,
            'ProCost': 84
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 28
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 47,
            'ProCost': 52
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 8,
            'ProCost': 23
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 28
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 40,
            'ProCost': 55
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 7,
            'ProCost': 27
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 67,
            'ProCost': 88
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 20,
            'ProCost': 29
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 38,
            'ProCost': 61
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 21
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 11,
            'ProCost': 26
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 36,
            'ProCost': 60
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 2,
            'ProCost': 24
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 83,
            'ProCost': 90
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 11,
            'ProCost': 27
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 49,
            'ProCost': 42
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 28
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 13,
            'ProCost': 25
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 30,
            'ProCost': 49
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 4,
            'ProCost': 26
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 76,
            'ProCost': 87
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 27
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 45,
            'ProCost': 55
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 1,
            'ProCost': 23
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 23
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 34,
            'ProCost': 51
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 3,
            'ProCost': 28
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 85,
            'ProCost': 80
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 20,
            'ProCost': 22
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 40,
            'ProCost': 51
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 25
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 15,
            'ProCost': 21
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 36,
            'ProCost': 41
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 1,
            'ProCost': 27
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 79,
            'ProCost': 93
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 11,
            'ProCost': 28
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 41,
            'ProCost': 51
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 8,
            'ProCost': 28
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 23
        }
    ];
   
    var renewableEnergy = getClassDate(rData);
    function getClassDate(data) {
        var date;
        for (var ln = 0, lt = data.length; ln < lt; ln++) {
            date = new Date(data[ln].Date.toString());
            var dtYr = date.getFullYear();
            var dtMn = date.getMonth();
            var dtdv = (dtMn + 1) / 3;
            data[ln].Year = 'FY ' + dtYr;
            data[ln].Quarter = dtdv <= 1 ? 'Q1 ' + ('FY ' + dtYr) : dtdv <= 2 ? 'Q2 ' + ('FY ' + dtYr) :
                dtdv <= 3 ? 'Q3 ' + ('FY ' + dtYr) : 'Q4 ' + ('FY ' + dtYr);
            data[ln].HalfYear = (dtMn + 1) / 6 <= 1 ? 'H1 ' + ('FY ' + dtYr) : 'H2' + ('FY ' + dtYr);
            delete (data[ln].Date);
        }
        return data;
    }

    var pivot_flatdata = [
        { Amount: 2100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 22, State: "Alberta" },
        { Amount: 1100, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 32, State: "Alberta" },
        { Amount: 3100, Country: "Canada", Date: "FY 2005", Product: "Van", Quantity: 22, State: "Alberta" },
        { Amount: 1600, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 32, State: "Alberta" },
        { Amount: 1500, Country: "Canada", Date: "FY 2008", Product: "Van", Quantity: 28, State: "Alberta" },
        { Amount: 1060, Country: "Canada", Date: "FY 2005", Product: "Car", Quantity: 26, State: "Alberta" },
        { Amount: 5100, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 21, State: "Alberta" },
        { Amount: 1900, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 23, State: "Alberta" },
        { Amount: 1000, Country: "Canada", Date: "FY 2008", Product: "Car", Quantity: 29, State: "Alberta" },
        { Amount: 3100, Country: "Canada", Date: "FY 2006", Product: "Bike", Quantity: 40, State: "Quebec" },
        { Amount: 1500, Country: "Canada", Date: "FY 2007", Product: "Bike", Quantity: 14, State: "Quebec" },
        { Amount: 2000, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 82, State: "Quebec" },
        { Amount: 4800, Country: "France", Date: "FY 2005", Product: "Car", Quantity: 49, State: "Charente-Maritime" },
        { Amount: 8200, Country: "France", Date: "FY 2006", Product: "Car", Quantity: 38, State: "Charente-Maritime" },
        { Amount: 8100, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 93, State: "Charente-Maritime" },
        { Amount: 9100, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 64, State: "Charente-Maritime" },
        { Amount: 2350, Country: "France", Date: "FY 2006", Product: "Bike", Quantity: 46, State: "Essonne" },
        { Amount: 7250, Country: "France", Date: "FY 2005", Product: "Van", Quantity: 43, State: "Gers" },
        { Amount: 9450, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 49, State: "Gers" },
        { Amount: 1450, Country: "France", Date: "FY 2008", Product: "Bike", Quantity: 49, State: "Gers" },
        { Amount: 1450, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 49, State: "Gers" },
        { Amount: 4250, Country: "France", Date: "FY 2007", Product: "Van", Quantity: 49, State: "Gers" },
        { Amount: 4050, Country: "France", Date: "FY 2007", Product: "Bike", Quantity: 59, State: "Gers" },
        { Amount: 4350, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 23, State: "Gers" },
        { Amount: 4950, Country: "France", Date: "FY 2008", Product: "Car", Quantity: 45, State: "Gers" },
        { Amount: 3400, Country: "Germany", Date: "FY 2005", Product: "Van", Quantity: 78, State: "Bayern" },
        { Amount: 8400, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 90, State: "Bayern" },
        { Amount: 9400, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 45, State: "Bayern" },
        { Amount: 7200, Country: "Germany", Date: "FY 2008", Product: "Van", Quantity: 92, State: "Bayern" },
        { Amount: 3400, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 24, State: "Bayern" },
        { Amount: 5330, Country: "Germany", Date: "FY 2005", Product: "Car", Quantity: 45, State: "Hamburg" },
        { Amount: 5900, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 20, State: "Saarland" },
        { Amount: 5800, Country: "Germany", Date: "FY 2006", Product: "Bike", Quantity: 58, State: "Saarland" },
        { Amount: 5700, Country: "Germany", Date: "FY 2006", Product: "Car", Quantity: 39, State: "Saarland" },
        { Amount: 8500, Country: "Germany", Date: "FY 2007", Product: "Bike", Quantity: 62, State: "Saarland" },
        { Amount: 2300, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 49, State: "Saarland" },
        { Amount: 5200, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 48, State: "Saarland" },
        { Amount: 1040, Country: "United Kingdom", Date: "FY 2005", Product: "Bike", Quantity: 47, State: "England" },
        { Amount: 1450, Country: "United Kingdom", Date: "FY 2005", Product: "Car", Quantity: 42, State: "England" },
        { Amount: 5150, Country: "United Kingdom", Date: "FY 2005", Product: "Van", Quantity: 53, State: "England" },
        { Amount: 1500, Country: "United Kingdom", Date: "FY 2006", Product: "Bike", Quantity: 24, State: "England" },
        { Amount: 7430, Country: "United Kingdom", Date: "FY 2006", Product: "Car", Quantity: 56, State: "England" },
        { Amount: 4720, Country: "United Kingdom", Date: "FY 2006", Product: "Van", Quantity: 50, State: "England" },
        { Amount: 3480, Country: "United Kingdom", Date: "FY 2007", Product: "Bike", Quantity: 45, State: "England" },
        { Amount: 3380, Country: "United Kingdom", Date: "FY 2007", Product: "Car", Quantity: 75, State: "England" },
        { Amount: 5820, Country: "United Kingdom", Date: "FY 2007", Product: "Van", Quantity: 39, State: "England" },
        { Amount: 2820, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 39, State: "England" },
        { Amount: 4820, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 72, State: "England" },
        { Amount: 1520, Country: "United Kingdom", Date: "FY 2008", Product: "Car", Quantity: 93, State: "England" },
        { Amount: 1450, Country: "United Kingdom", Date: "FY 2008", Product: "Van", Quantity: 84, State: "England" },
        { Amount: 4930, Country: "United States", Date: "FY 2006", Product: "Van", Quantity: 59, State: "Alabama" },
        { Amount: 6250, Country: "United States", Date: "FY 2008", Product: "Bike", Quantity: 94, State: "Alabama" },
        { Amount: 1520, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 53, State: "North Carolina" },
        { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Van", Quantity: 61, State: "North Carolina" },
        { Amount: 3200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 47, State: "South Carolina" },
        { Amount: 3320, Country: "United States", Date: "FY 2005", Product: "Car", Quantity: 49, State: "South Carolina" },
        { Amount: 6300, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 45, State: "South Carolina" },
        { Amount: 4300, Country: "United States", Date: "FY 2006", Product: "Car", Quantity: 94, State: "South Carolina" },
        { Amount: 7200, Country: "United States", Date: "FY 2007", Product: "Bike", Quantity: 40, State: "South Carolina" },
        { Amount: 3900, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 43, State: "South Carolina" },
      ];
    
      var alphanumeric_data = [
        {
            "ProductID": "618-XW",
            "Country": "Canada",
            "Sold": 90,
            "Amount": 9219069
    
        },
        {
            "ProductID": "1111-GQ",
            "Sold": 37,
            "Amount": 1571126,
            "Country": "Australia"
        },
        {
            "ProductID": "330-BR",
            "Sold": 31,
            "Amount": 9523258,
            "Country": "Germany"
        },
        {
            "ProductID": "1035-VC",
            "Sold": 86,
            "Amount": 1004572,
            "Country": "United States"
        },
        {
            "ProductID": "36-SW",
            "Sold": 73,
            "Amount": 4532163,
            "Country": "United Kingdom"
        },
        {
            "ProductID": "71-AJ",
            "Sold": 45,
            "Amount": 1916052,
            "Country": "Germany"
        },
        {
            "ProductID": "980-PP",
            "Sold": 85,
            "Amount": 6586156,
            "Country": "Canada"
        },
        {
            "ProductID": "209-FB",
            "Sold": 51,
            "Amount": 6348087,
            "Country": "Australia"
        },
        {
            "ProductID": "428-PL",
            "Sold": 65,
            "Amount": 1365854,
            "Country": "Germany"
        },
        {
            "ProductID": "618-XW",
            "Sold": 81,
            "Amount": 6461768,
            "Country": "United States"
        },
        {
            "ProductID": "1111-GQ",
            "Sold": 33,
            "Amount": 6181560,
            "Country": "United Kingdom"
        },
        {
            "ProductID": "330-BR",
            "Sold": 17,
            "Amount": 611364,
            "Country": "Germany"
        },
        {
            "ProductID": "1035-VC",
            "Sold": 41,
            "Amount": 3688930,
            "Country": "Canada"
        },
        {
            "ProductID": "36-SW",
            "Sold": 51,
            "Amount": 4648920,
            "Country": "Australia"
        },
        {
            "ProductID": "71-AJ",
            "Sold": 56,
            "Amount": 4579862,
            "Country": "Germany"
        },
        {
            "ProductID": "980-PP",
            "Sold": 25,
            "Amount": 1249117,
            "Country": "United States"
        },
        {
            "ProductID": "209-FB",
            "Sold": 60,
            "Amount": 9603891,
            "Country": "United Kingdom"
        },
        {
            "ProductID": "428-PL",
            "Sold": 31,
            "Amount": 9548655,
            "Country": "Canada"
        },
        {
            "ProductID": "618-XW",
            "Sold": 93,
            "Amount": 7496742,
            "Country": "Australia"
        },
        {
            "ProductID": "1111-GQ",
            "Sold": 62,
            "Amount": 8692814,
            "Country": "Germany"
        },
        {
            "ProductID": "330-BR",
            "Sold": 22,
            "Amount": 4789234,
            "Country": "United States"
        },
        {
            "ProductID": "1035-VC",
            "Sold": 61,
            "Amount": 7927531,
            "Country": "United Kingdom"
        },
        {
            "ProductID": "36-SW",
            "Sold": 68,
            "Amount": 5440025,
            "Country": "Germany"
        },
        {
            "ProductID": "71-AJ",
            "Sold": 87,
            "Amount": 8097913,
            "Country": "Canada"
        },
        {
            "ProductID": "980-PP",
            "Sold": 87,
            "Amount": 1809071,
            "Country": "Australia"
        },
        {
            "ProductID": "209-FB",
            "Sold": 96,
            "Amount": 9893092,
            "Country": "Germany"
        },
        {
            "ProductID": "428-PL",
            "Sold": 22,
            "Amount": 8136252,
            "Country": "United States"
        },
        {
            "ProductID": "618-XW",
            "Sold": 29,
            "Amount": 9190577,
            "Country": "United Kingdom"
        },
        {
            "ProductID": "1111-GQ",
            "Sold": 85,
            "Amount": 5410172,
            "Country": "Germany"
        }
      ];