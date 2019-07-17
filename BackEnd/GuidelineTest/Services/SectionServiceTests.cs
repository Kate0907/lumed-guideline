using Microsoft.VisualStudio.TestTools.UnitTesting;
using Guideline.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Guideline.Models;

namespace Guideline.Services.Tests
{
    [TestClass()]
    public class SectionServiceTests
    {
        private SectionService _Service;

        [TestInitialize]
        public void BeforeEach()
        {
            _Service = new SectionService();
        }

        [TestMethod()]
        public void PostNewSectionOnAMainSectionTest()
        {
            var m = MainDb.MAINS.FirstOrDefault(v => v.id == 4);
            Assert.AreEqual(1, m.sectionIds.Count());
            _Service.Post(m);
            Assert.AreEqual(2, m.sectionIds.Count());

        }

      
        [TestMethod()]
        public void PutTest()
        {
            Assert.AreEqual("Key Messages", SectionDb.SECTIONS[0].title);
            var s = new Item();
            s.title = "Mushroom";
            _Service.Put(0, s);
            Assert.AreEqual("Mushroom", SectionDb.SECTIONS[0].title);
        }


        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void PutTestOnAnUnexistId()
        {
            var s = new Item();
            s.title = "Mushroom";
            _Service.Put(90, s);
        }


        [TestMethod()]
        public void DeleteTest()
        {
            Assert.AreEqual(11, SectionDb.SECTIONS.Count());
            Assert.AreEqual(2, MainDb.MAINS[0].sectionIds.Count());
            Assert.IsNotNull(SectionDb.SECTIONS.FirstOrDefault(s => s.id == 1));
            _Service.Delete(1);
            Assert.AreEqual(10, SectionDb.SECTIONS.Count());
            Assert.AreEqual(1, MainDb.MAINS[0].sectionIds.Count());
            Assert.IsNull(SectionDb.SECTIONS.FirstOrDefault(s => s.id == 1));
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void DeleteAnUnexistSectionTest()
        {
            _Service.Delete(90);
        }
    }
}