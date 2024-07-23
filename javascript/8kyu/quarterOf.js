const quarterOf = (month) => {
    if(month >=1 && month <= 12) {
      switch (true) {
          case month <= 3:
            return 1;
          case month > 3 && month <= 6:
            return 2;
          case month > 6 && month <= 9:
            return 3;
          case month > 9 && month <= 12:
            return 4;
      }
    } else {
      throw new Error('Invalid Month');
    }
  }