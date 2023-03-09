export default function createKey(column) {
  return column.path || column.key
}
