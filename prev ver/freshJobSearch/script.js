new Vue({
    el: '#app',
    data: {
      jobs: [
        {
          id: 1,
          title: 'Front-end Developer',
          description: 'We are looking for a skilled front-end developer to join our team.',
          location: 'New York, USA',
          department: 'Development',
          showPopup: false
        },
        {
          id: 2,
          title: 'Backend Developer',
          description: 'We are hiring a backend developer to work on our server infrastructure.',
          location: 'London, UK',
          department: 'Development',
          showPopup: false
        },
        {
          id: 3,
          title: 'UX Designer',
          description: 'Join our UX design team and help create intuitive user experiences.',
          location: 'San Francisco, USA',
          department: 'Design',
          showPopup: false
        },
        // Add more job objects as needed
      ],
      selectedDepartment: '',
      selectedLocation: '',
      departments: [],
      locations: []
    },
    computed: {
      filteredJobs() {
        let filteredJobs = this.jobs;
  
        if (this.selectedDepartment) {
          filteredJobs = filteredJobs.filter(job => job.department === this.selectedDepartment);
        }
  
        if (this.selectedLocation) {
          filteredJobs = filteredJobs.filter(job => job.location === this.selectedLocation);
        }
  
        return filteredJobs;
      }
    },
    methods: {
      openPopup(job) {
        job.showPopup = true;
      },
      closePopup(job) {
        job.showPopup = false;
      }
    },
    mounted() {
      this.departments = [...new Set(this.jobs.map(job => job.department))];
      this.locations = [...new Set(this.jobs.map(job => job.location))];
    }
  });
  