export default function defineUrl(
  field,
  order,
  currentPage,
  filter,
  filterValue
) {
  let url = "https://dummyjson.com/users";
  const limit = `&limit=5&skip=${currentPage}`;

  if (filter && filterValue) {
    url += `/filter?key=${filter}&value=${filterValue}${limit}`;
  } else {
    url += `?limit=5&skip=${currentPage}`;
  }

  if (field) {
    url += `&sortBy=${field}`;
  }

  if (order) {
    url += `&order=${order}`;
  }

  return url;
}
