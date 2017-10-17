let newScore = person.score
  |> double
  |> _ => add(7, _)
  |> _ => boundScore(0, 100, _);
