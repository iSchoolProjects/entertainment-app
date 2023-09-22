export function handleBookmark(id) {
  getBookmarks(id);
}

const getBookmarks = (id) => {
  if (localStorage.getItem('bookmarks') === null) {
    const newArray = [];
    newArray.push(id);
    localStorage.setItem('bookmarks', JSON.stringify(newArray));
  } else {
    const bookM = JSON.parse(localStorage.getItem('bookmarks'));
    if (bookM.includes(id)) {
      localStorage.setItem('bookmarks', JSON.stringify(bookM.filter((s) => s !== id)));
    } else {
      localStorage.setItem('bookmarks', JSON.stringify(bookM.concat(id)));
    }
  }
};

// ne zna funkcija vec pitas localstorage

// 1. da provjeri sa localStorage da li postoji ID
// 2. ako postoji ID da ga skloni

// Ako je localStorage null napravimo novi niz i u novi niz dodamo ID
// nakon akcija dodavanja ili oduzimanja niza moramo da sacuvamo niz u localstorage
//kada postoji LocalStorage prvo moramo da procitamo njegove vrijednosti, vrijednosti citamo sa json farse i onda ako taj ID postoji u tome nizu brisemo ga a ako ne postoji dodajemo ga

// Ako smo vidjeli da niz nije prazan, provjerimo da li taj ID postoji u nizu a ako postoji izbaci ga iz niza a ako ne postoji ubaci ga
