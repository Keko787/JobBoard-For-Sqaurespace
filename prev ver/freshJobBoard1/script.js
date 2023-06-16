const app = Vue.createApp({
    data() {
      return {
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
        selectedDepartments: [],
        selectedLocations: [],
        departments: [],
        locations: []
      };
    },
    computed: {
      filteredJobs() {
        let filteredJobs = this.jobs;
  
        if (this.selectedDepartments.length > 0) {
          filteredJobs = filteredJobs.filter(job => this.selectedDepartments.includes(job.department));
        }
  
        if (this.selectedLocations.length > 0) {
          filteredJobs = filteredJobs.filter(job => this.selectedLocations.includes(job.location));
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
      },
      navigateToJobPage(jobId) {
        // Replace the URL with the desired job page URL
        window.location.href = 'https://example.com/job/' + jobId;
      }
    },
    mounted() {
      this.departments = [...new Set(this.jobs.map(job => job.department))];
      this.locations = [...new Set(this.jobs.map(job => job.location))];
    }
  });
  
  app.mount('#app');