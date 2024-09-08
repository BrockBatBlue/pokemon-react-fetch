## Stage 4 - Async state (data fetching)

### Part 1

- We will fetch a single Pokemon data from Pokemon API:
  https://pokeapi.co/api/v2/pokemon/[id]
- Page with single large "Card"
- Under the card a ButtonGroup component with:
  - Button for Previous (disabled on first pkmn)
  - Button for next

### Part 2

- We will fix layout shift
- Add loading state
- Add error state
- Add Error and Loading component

### Part 3

- We will fix race conditions
  > https://react.dev/reference/react/useEffect#fetching-data-with-effects
- Isn't it too complicated now?
  - Why not make it a custom hook instead?

### Part 4

- It should be perfect now, right? Are there any other issues left?

  - Nope, we still need to solve stuff, such as data duplication:

    - Can be solved with fetching at parent and prop drilling
      - Can become super messy very fast
    - Can be solved with context

      - The context would now like like:

        {
        "[url called]": {currentState, loading, error, lastCalled, etc}
        "[url called]": {currentState, loading, error, lastCalled, etc}
        ...
        }

      - It solves it, but it makes the context provider super confusing and it basically creates a "cache"
      - This doesn't solve all of the errors, only most of them
      - It creates new ones, since cache invalidation and stuff is complicated

    - Why not React Query?
      To Be Continued...
