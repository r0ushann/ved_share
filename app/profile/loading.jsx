 {/* All Prompts */}
 {searchText ? (
    <PromptCardList
      data={searchedResults}
      handleTagClick={handleTagClick}
    />
  ) : (
    <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
  )}