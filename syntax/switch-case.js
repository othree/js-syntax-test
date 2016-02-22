switch (Animal) {
  case 'Animal': {
    const meat = 'what'
    break
  }
}

// No Quoted Case + No Block is OK

switch (Animal) {
  case Animal:
    const meat = 'what'
    break
}

// No Quoted Case + Block is Not OK

switch (Animal) {
  case Animal: 
  case Animal:
  case Animal:
  case Animal: {
    const meat = 'what'
    break
  }
}

switch (Animal) {
  case Ani.mal: {
    const thing = 'what'
    break
  }
}

switch (Animal) {
  case Animal(): {
    const thing = 'what'
    break
  }
}

switch (Animal) {
  case (Animal): {
    const thing = 'what'
    break
  }
}

case

