/**
 * 随机生成用户 ID
 * @param length 用户 ID 长度（默认为8）
 * @returns 用户 ID
 */
export function generateUserId(length: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
