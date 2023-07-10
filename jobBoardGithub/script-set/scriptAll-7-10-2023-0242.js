const app = Vue.createApp({
    data() {  // data
      return {
        jobs: jobsdata,  // jobsdata is from the data file
        selectedDepartments: [],  // list of filtered departments (You can manually initialize the menu with it pre-selected)
        selectedLocations: [],  // list of filtered locations (You can manually initialize the menu with it pre-selected)
        departments: [],  // list of departments
        locations: [],  // list of locations
        searchQuery: ''  // inputted word in search
      };
    },
    computed: {  // functions
      filteredJobs() {  // filters the position based on the dept. and location selected
        let filteredJobs = this.jobs;  // initialize the filter jobs variable with the populated jobs data

        if (this.selectedDepartments.length > 0) {  // if the # of dept available is more than 0 (if there is item in the selected dept array (aka someone selected a dept), start to filter)
          filteredJobs = filteredJobs.filter(job => this.selectedDepartments.includes(job.department));  // dept. being filtered
        }

        if (this.selectedLocations.length > 0) {  // if the # of locations available is more than 0 (if there is item in the selected locations array (aka someone selected a location), start to filter)
          filteredJobs = filteredJobs.filter(job => this.selectedLocations.includes(job.location));  // locations being filtered
        }

        if (this.searchQuery.trim() !== '') {  // this will search the position based on the title based on the order, the search is lowest on filter priority
                  const searchLower = this.searchQuery.trim().toLowerCase();  // space/case-insensitive matching
                  filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(searchLower));  // title being filtered
              }

        return filteredJobs;  // returns the jobs that were in the resulting filter
      }
    },
    mounted() {  // allows you to add in data without worrying to sort it or adding a new option to the filter menu (allows you to plug and chug data)
      this.departments = [...new Set(this.jobs.map(job => job.department))];  // basically finds all the departments in the data file to list them out
      this.locations = [...new Set(this.jobs.map(job => job.location))];  // basically finds all the locations in the data file to list them out
    }
  });

  app.mount('#app');
