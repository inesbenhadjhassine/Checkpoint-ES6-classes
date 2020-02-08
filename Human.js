
class  Human {
    name;
    job;
    skills=["angular","java"];
    constructeur (){
        this.name ="";
        this.job="";
    }

    
    getJob(job) {
        this.job=job;
        console.log(this.job)
    }
    leaveJob() {        
        this.job="unemployed"; 
        console.log(this.job)   }

    learnNewSkill(skill) {
     this.skills.push(skill);
      console.log(this.skills)
    }

    forgetSkill(skill) {
        this.skills.pop(skill);
        console.log(this.skills)
    }  
    
}
class Student extends Human {
    constructeur(){
        this.super();
        
    }

}

const me = new Student();

me.getJob("Web developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob();

