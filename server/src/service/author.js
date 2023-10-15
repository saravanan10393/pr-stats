export async function addAuthor(ctx, author) {
  const res =  await ctx.env.DB.prepare(`INSERT INTO author(id, name, profileUrl, avatarUrl)
   VALUES(?1, ?2, ?3, ?4)
   ON CONFLICT(id) DO 
   UPDATE SET name=?2, profileUrl=?3, avatarUrl=?4
   `).bind(author.id, author.login, author.url, author.avatarUrl).run();

  return {
    success: res.success
  }
}

export async function getAuthorList(ctx, filter) {
  const rep = await ctx.env.DB.prepare(`SELECT * FROM author`).run();
  return rep.results;
}
