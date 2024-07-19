// Funksiya: Ardıcıl ədədlərdən ibarət arraydə çatışmayan ədədi tapır
function findMissingNumber(arr) {
    // Arrayi sort edir
    arr.sort((a, b) => a - b);

    // Arraydəki ədədləri yoxlayır
    for (let i = 0; i < arr.length - 1; i++) {
        // Cari ədəd ilə növbəti ədəd arasındakı fərqi yoxlayır
        if (arr[i + 1] !== arr[i] + 1) {
            // Əskik olan ədədi qaytarır
            return arr[i] + 1;
        }
    }

    // Əgər heç bir çatışmayan ədəd tapılmazsa, null qaytarır
    return null;
}

// Nümunə istifadəsi
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8., 10];
const missingNumber = findMissingNumber(numbersArray);
console.log("Çatışmayan ədəd:", missingNumber);