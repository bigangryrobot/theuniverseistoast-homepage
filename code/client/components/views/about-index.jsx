AboutIndex = React.createClass({
  render() {
    return <div classNameName="about">
    <AppHeader mainText="clark beverlin" subHeading="engineer, tinkerer, developer" />
    <GridRow>
      <GridColumn className="col-xs-12">
        <div className="container">
          <h1>This site</h1>
          <h4>Why is this here</h4>
          <hr/>
          <GridColumn className="col-xs-12">
            <p>A learning adventure in mongodb, reactjs, <a href="http://meteor.com">meteor</a> and more written by my hand and provided to the comunity in full on <a href="https://github.com/bigangryrobot/theuniverseistoast-homepage">github</a>. Header background is from <a href="http://deadastronauts.com/">this</a> amazing artist and yes I did remove their brand from the image but no it was not for anything other than to clean it up.</p>
          </GridColumn>
        </div>

        <div className="container">
          <h1>About me</h1>
          <h4>Who am I and what do I do</h4>
          <hr/>
          <GridColumn className="col-xs-2">
            <img className="center-block" src="/about-pic.png" alt="" />
            <h3 className="text-center">Clark Beverlin</h3>
            <h4 className="text-center text-muted">engineer with many hats</h4>     
          </GridColumn>
          <GridColumn className="col-xs-4">
            <p>So what do I do? The simple answer is well, not so simple. I enable developers and buisnesses through automation, great archetecture, and analytics using avaiable tools or by creating my own. I make the the impossible possible within reason, I keep the lights on and platters/bits whirring along without interruption. I make the devs play nice with the ops and arm wrestle with the business folks. Most importantly, I learn constantly and push exponentionally.</p>
          </GridColumn>
          <GridColumn className="col-xs-6">
            <ul className="list-unstyled">
              <li><small>Automation, Monitoring, Programming and Scripting</small></li>
              <li><div className="progress"><div className='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: '95%'}}> <span className='sr-only'>100% </span> </div></div></li>
              
              <li><small>Administration: Linux, Windows, Storage and Database</small></li>
              <li><div className="progress"><div className='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: '90%'}}> <span className='sr-only'>90% </span> </div></div></li>
              
              <li><small>Virtualization: ESXi, KVM, AWS, Rackspace, Azure</small></li>
              <li><div className="progress"><div className='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: '80%'}}> <span className='sr-only'>80% </span> </div></div></li>
              
              <li><small>Enterprise Storage and Infrastructure</small></li>
              <li><div className="progress"><div className='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: '70%'}}> <span className='sr-only'>70% </span> </div></div></li>

              <li><small>Playing with puppies</small></li>
              <li><div className="progress"><div className='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: '60%'}}> <span className='sr-only'>60% </span> </div></div></li>
            </ul>
          </GridColumn>
        </div>

        <div className="container">
          <h1>Resume</h1>
          <h4>What I have done</h4>
          <hr/>
          <GridColumn className="col-xs-12">
            <ul className="resumeList">
              <li>
                  <h3>Sr Devops Engineer</h3>
                  <h5>SolarCity</h5>
                  <h4><i className="resumePeriod">July 2014 – Present</i></h4>
                  <ul className="list-unstyled">
                    <li> - Buildout and support internal and external cloud providers ranging from AWS, Azure, Rackspace and more</li>
                    <li> - Increase overall up time by stabilizing application health, fixing compute and storage performance issues, implementing monitoring and automated recovery features as well as oncall rotation</li>
                    <li> - Help build and foster devops mentality building a team of 10</li>
                    <li> - Champion good architectural practices for both the infrastructure and development teams</li>
                    <li> - Support over 350 applications and 20k users across the globe</li>
                    <li> - Investigate and implement latest technologies and practices to best serve customers across 6 environments and 3 clouds.</li>
                    <li> - Support KVM and Esxi at an expert level</li>
                    <li> - Build, Architect and deploy new KVM and Solidfire cluster to provide top of class compute and storage for production applications</li>
                    <li> - Provide knowledge transfer and training to other staff</li>
                    <li> - Provided support for an average of 350 builds and 900 deploys a week on average</li>
                    <li> - Support nearly 15 programming languages and 20 frameworks in both windows and linux environments</li>
                    <li> - Design and build application to record up-time of applications and services so that operations and executive team could begin to plan where time and improvements should be directed</li>
                    <li> - Implement application and server performance monitoring for detailed diagnostics, alerting and automated recovery of events</li>
                  </ul>
              </li>
              <li>
                  <h3>System Administrator</h3>
                  <h5>PeopleFinders</h5>
                  <h4><i className="resumePeriod">April 2013 – August 2015</i></h4>
                  <ul className="list-unstyled">
                      <li> - Worked with the operations team to provide four nines of uptime for a fast moving public records and software development company.</li>
                      <li> - Helped maintain more than 1,000 mixed environment servers, as well as Cisco, Bigip, Dell and Brocade networking equipment.</li>
                      <li> - Tuned and improved multiple web tiers to improve response time and robustness of primary product by 35% (peoplefinders.com) and secondary product by 20% (api.peoplefinders.com).</li>
                      <li> - Worked to stabilize storage infrastructure with in-depth analysis of storage usages and needs for servers and applications.</li>
                      <li> - Implemented 4 Pure FA-400 SSD storage systems and maintained 3par Inserv v400 and T400 storage systems on two separate 8gb Brocade SANs.</li>
                      <li> - Upgraded Brocade SAN fabric from 4gb to 8gb and improved its stability / overall health</li>
                      <li> - Maintained over .5pb of consumed storage with over 200k iops and 4.5gbps and 16k avg blocks</li>
                      <li> - Managed an Active Directory domain for both corporate and production usages and planed an active directory redesign that would encompass enhanced GPO usages, domain security and FQDN.</li>
                      <li> - Helped to improve coding practices and code deployment procedures with development of devops procedures, standards, and tools along with custom unix scripting and APM tools like Appdynamics</li>
                      <li> - Provided security and oversight to a PCI compliance level 2 company with implementation of IPS/IDS tools and security scans of the internal and external systems.</li>
                      <li> - Provided analysis and insight from load testing and application debugging to determine capacity and bottlenecks in a decentralized multi tier application environment to allow planned growth.</li>
                  </ul>
              </li>
              <li>
                  <h3>Linux System Administrator</h3>
                  <h5>UC Davis</h5>
                  <h4><i className="resumePeriod">October 2012 – April 2013 </i></h4>
                  <ul className="list-unstyled">
                      <li> - Acting Lead Server Administrator due to staffing shortages</li>
                      <li> - Designed and implemented IDS/IPS, log monitoring, system monitoring and system deployment infrastructures</li>
                      <li> - Grew the network from 40 servers to over 120 mixed OS systems within Hyperv and ESXi to meet production requirements</li>
                      <li> - Deployed and maintained 22 applications for UC wide and UCD initiatives on of which one was the keystone to all UCD research funding</li>
                      <li> - Developed Policies and Procedures for all elements of network operations to meet UC and internal requirements</li>
                      <li> - Maintained levels of uptime that allowed staff and management to bring in over 700 million of research funding for the fiscal year</li>
                      <li> - Worked with developers and project managers to securely host, accurately monitor, and cycle systems in and out of use</li>
                      <li> - Maintained 5 distinct publically addressable networks and 6 firewalls</li>
                  </ul>
              </li>
              <li>
                  <h3>Desktop and Network Support Technician</h3>
                  <h5>UC Davis</h5>
                  <h4><i className="resumePeriod">December 2010 – October 2012</i></h4>
                  <ul className="list-unstyled">
                      <li> - Assumed Lead Server Administration duties due to staffing shortages</li>
                      <li> - Mantained 40 Windows and Linux servers</li>
                      <li> - Lead the desktop team who took care of 240 users and had on average 300 tickets closed per month</li>
                      <li> - Developed a VMware ESXi platform that could support UC wide applications</li>
                      <li> - Maintained a secure mixed OS networking environment</li>
                      <li> - Planned and performed migration of users from distributed authentication to centralized as well as reworking the entire network infrastructure</li>
                      <li> - Built and migrated users from an insecure firewall to a more secure multi vlan firewall</li>
                  </ul>
              </li>            
              <li>
                  <h3>Research Support Technician</h3>
                  <h5>UC Davis</h5>
                  <h4><i className="resumePeriod">September 2008 – December 2010</i></h4>
                  <ul className="list-unstyled">
                      <li> - Designed and built hardware, software, and electrical systems to perform research tasks</li>
                      <li> - Provide programming and technical support for research equipment</li>
                  </ul>
              </li>
            </ul>
          </GridColumn>
        </div>

        <div className="container">
          <h1>Services</h1>
          <h4>What can I do for you</h4>
          <hr/>
          <GridColumn className="col-xs-12">
            <p>Need to make your infrastructure better? Do you have applications or infrastructure that refuse to scale? Want to deliver code more cleanly to your environments? Maybe I can help.</p>
          </GridColumn>
        </div>

        <div className="container">
          <h1>Contact</h1>
          <h4>Get in touch with me</h4>
          <hr/>
          <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
            <form>
              <fieldset className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                <small className="text-muted">I will never share your email with anyone else.</small>
              </fieldset>
              <fieldset className="form-group">                  
                <label for="exampleTextarea">Message</label>
                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
              </fieldset>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </GridColumn>
        </div>

      </GridColumn>
    </GridRow>
    </div>;
  }
});
