//Rotate n X n matrix 90 degrees.
var rotateMatrix = function (arr) {
  var newArray = [];
  var n = arr.length
  for (var i=0; i < n; i++) {
    newArray.push([]);
  };
  for (var i=0; i < n; i++) {
    for ( var j= 0; j<n; j++ ) {
      newArray[j][n-1-i] = arr[i][j];
    };
  };
  return newArray;
}
var matrix = [[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]];

rotateMatrix(matrix);


//When you see 0, make the rows and columns of it zero.
var zeroMatrix = function (arr) {
  var n = arr.length;
  var m = arr[0].length
  var rows = [];
  var columns = [];

  for (var i= 0; i < n; i++) {
    for (var j= 0; j < m; j++) {
      if (arr[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      };
    };
  }
  for (var i= 0; i < rows.length; i++) {
    for (var j = 0; j < m; j++) {
      arr[rows[i]][j]=0;
    };
  }
  for (var i= 0; i < columns.length; i++) {
    for (var j = 0; j < n; j++) {
      arr[j][columns[i]]=0;
    };  
  } 
  return arr;
}
var matrix = [[1,0,3,4],
        [5,6,7,8],
        [9,10,11,12]];

zeroMatrix(matrix);



var stringRotation = function(str1, str2, isSubstring) {
  if (str1.length === str2.length || str1.length !== 0) {
    var str3= str2.concat(str2);
    return isSubstring(str1,str3);
  };
  return false;
}


