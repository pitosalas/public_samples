Model: User (db: users)
name: text

Model: Poster (db: posters)
name: text

Model: Tag (db: tags)
name: text

Model: PosterTag (db: poser_tags)
tag_id: references
poster_id: references
