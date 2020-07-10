# Evergreen Test Work

## Project setup

```bash
# install dependencies
$ npm install

# Compiles and hot-reloads for development
$ npm run serve

# Compiles and minifies for production
$ npm run build

# Lints and fixes files
$ npm run lint
```

---

## Требования:

1. Должен быть выбор количества элементов на странице
   (обычный select с изначально заданными option - 5, 10, 20 …
2. В пагинации по краям должны быть кнопки prev, next. Делать неактивными (disabled)
   эти кнопки если страниц дальше нет.
3. Ссылка на получение юзеров (всех) - https://reqres.in/api/users.
   (итд вместо page=N) Отдельных методов api на получение с пагинацией нет.
   Можно сделать клиентскую разбивку на страницы.
4. Поиск нужно реализовать по всем юзерам сразу, искать по полю name.
5. Так же при разработке нужно использовать git.

### Дополнительное задание:

Реализовать отдельную страницу для юзера из списка с полной информацией о нем.
Так же должна быть возможность вернутся на страницу со списком
( что то наподобие хлебных крошек)

**Стек:**

- Vue cli [https://cli.vuejs.org/](https://cli.vuejs.org/)
- Vuex [https://vuex.vuejs.org/ru/guide/](https://vuex.vuejs.org/ru/guide/)
- Vue-route _для доп. задания_ [https://router.vuejs.org/ru/](https://router.vuejs.org/ru/)
- Axios [https://github.com/axios/axios](https://github.com/axios/axios)

Время на реализацию - 2ч.
<br>
Результат работы залить на GitHub или Bitbucket и предоставить ссылку на проект.
