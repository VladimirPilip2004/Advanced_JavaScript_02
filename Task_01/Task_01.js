/*
Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный  список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
class Library {
	#books;

    constructor(books = []) {
        const findDupl = books => books.filter((item, index) => books.indexOf(item) !== index);
        const dupl = findDupl(books);

        if (dupl.length == 0) {
            this.#books = books;
        } else {
            throw Error(`Ваша библиотека содержит дубликаты: ${dupl}`)
        }
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        let index = this.#books.indexOf(title);
        if (index !== -1) {
            throw Error("Такая книга уже есть")
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        let index = this.#books.indexOf(title);
        if (index !== -1) {
            this.#books.splice(index, 1);
        } else {
            throw Error("Такой книги нет")
        }
    }

    hasBook(title) {
        let index = this.#books.indexOf(title);
        (index !== -1) ? console.log(true): console.log(false);
    }

}

const myLibrary = new Library(["book1", "book2", "book3", "book4"]);
console.log(myLibrary.allBooks);

myLibrary.addBook("book5");
console.log(myLibrary.allBooks);

myLibrary.removeBook("book3");
console.log(myLibrary.allBooks);

myLibrary.hasBook("book2");