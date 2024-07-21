function areYouPlayingBanjo(name) {
    const firstLetter = name[0];
    
    return /^[Rr]/.test(name)
      ? `${name} plays banjo` 
      : `${name} does not play banjo`;
  }