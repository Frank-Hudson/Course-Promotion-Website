/**
 *
 * @property {number} level
 * @property {string} mode
 * @property {Date} startDate
 * @property {string} cLocation
 * @property {string} courseCode
 *
 */
class CourseDetails {
  level;
  mode;
  startDate;
  cLocation; // c = campus/course (you choose)
  courseCode;

  /**
   *
   * @param {number} level
   * @param {string} mode
   * @param {Date} startDate
   * @param {string} cLocation
   * @param {string} courseCode
   */
  constructor(level, mode, startDate, cLocation, courseCode) {
    if (isNaN(level)) {
      throw "TypeError: `level` must be a number";
    } else if (typeof startDate != typeof new Date()) {
      throw "TypeError: `startDate` must be a Date";
    } else {
      this.level = level;
      this.mode = mode;
      this.startDate = startDate;
      this.cLocation = cLocation;
      this.courseCode = courseCode;
    }
  }

  html() {
    return `<div class='course-details'>\
              <p><b>Level: </b> <span class='detail'> ${
                this.level
              } </span> </p>\
              <p><b>Mode: </b> <span class='detail'> ${this.mode} </span> </p>\
              <p><b>Start Date: </b> <span class='detail' title='dd/mm/yyyy'> ${dateString(
                this.startDate,
                "dd/mm/yyyy"
              )} </span> </p>\
              <p><b>Location: </b> <span class='detail'> ${
                this.cLocation
              } </span> </p>\
              <p><b>Course Code: </b> <span class='detail'> ${
                this.courseCode
              } </span> </p>\
            </div>`;
  }
}

/**
 * Returns a string representation of a Date object.
 *
 * @param {Date} date
 *
 * Default format: `dd/mm/yyyy` (overload with 2nd param for other formats)
 */
function dateString(date) {
  if (typeof date != typeof new Date()) {
    throw "TypeError: `date` must be a Date";
  } else {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}

/**
 * Returns a string representation of a Date object.
 *
 * @param {Date} date
 * @param {string} format
 *
 * Possible forms are `d/m/y`, `y/m/d`, `m/d/y`, and `y/d/m`.
 * Additionally, the `/` symbol can be replaced with `-` or `.`.
 */
function dateString(date, format) {
  if (typeof date != typeof new Date()) {
    throw "TypeError: `date` must be a Date";
  } else if (typeof format != typeof "") {
    throw "TypeError: `format` must be a string";
  } else {
    switch (format) {
      // `/`
      case "dd/mm/yyyy":
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        break;

      case "yyyy/mm/dd":
        return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
        break;

      case "mm/dd/yyyy":
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        break;

      case "yyyy/dd/mm":
        return `${date.getFullYear()}/${date.getDate()}/${date.getMonth()}`;
        break;

      // `-`
      case "dd-mm-yyyy":
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        break;

      case "yyyy-mm-dd":
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        break;

      case "mm-dd-yyyy":
        return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
        break;

      case "yyyy-dd-mm":
        return `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`;
        break;

      // `.`
      case "dd.mm.yyyy":
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
        break;

      case "yyyy.mm.dd":
        return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
        break;

      case "mm.dd.yyyy":
        return `${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`;
        break;

      case "yyyy.dd.mm":
        return `${date.getFullYear()}.${date.getDate()}.${date.getMonth()}`;
        break;

      default:
        throw "FormatError: `format` must be made up of the symbols `d` for \
        date, `m` for month, and `y` for year and a single separator `/`, `-`, \
        or `.` repeated between";
        break;
    }
  }
}

const course06F301NA = new CourseDetails(
  3,
  "Full Time",
  new Date("2024-09-02"),
  "Nantgarw",
  "06F301NA"
);

function renderCourseDetails() {
  document.getElementById("details").innerHTML = course06F301NA.html();
}

/**
 * Function runs when the `body` element loads
 */
function pageLoad() {
  renderCourseDetails();
}
